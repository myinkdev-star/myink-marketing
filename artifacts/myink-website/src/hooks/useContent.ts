import { useState, useEffect, useRef } from "react";
import yaml from "js-yaml";

interface ContentResult<T> {
  data: T;
  body: string;
  loading: boolean;
  error: Error | null;
}

interface CollectionResult<T> {
  items: T[];
  loading: boolean;
  error: Error | null;
}

function parseFrontmatter(raw: string): { data: unknown; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  try {
    const data = yaml.load(match[1]);
    return { data: data ?? {}, body: match[2].trim() };
  } catch {
    return { data: {}, body: raw };
  }
}

/**
 * Fetches a single Markdown file from public/content/ and returns
 * the parsed YAML frontmatter as `data` and the Markdown body as `body`.
 *
 * Falls back gracefully — if the file can't be loaded the hook simply
 * returns loading: false with an empty data object, so the component
 * can still render using its hardcoded fallback values.
 */
export function useContent<T = Record<string, unknown>>(
  path: string
): ContentResult<T> {
  const [data, setData] = useState<T>({} as T);
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    const url = `${import.meta.env.BASE_URL}content/${path}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Content not found: ${path}`);
        return res.text();
      })
      .then((raw) => {
        if (cancelled) return;
        const parsed = parseFrontmatter(raw);
        setData(parsed.data as T);
        setBody(parsed.body);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err as Error);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [path]);

  return { data, body, loading, error };
}

/**
 * Fetches multiple Markdown files from public/content/ in parallel
 * and returns an array of parsed frontmatter objects.
 * Stable as long as the paths array contents don't change.
 */
export function useContentCollection<T = Record<string, unknown>>(
  paths: string[]
): CollectionResult<T> {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const keyRef = useRef(paths.join("|"));

  useEffect(() => {
    let cancelled = false;
    const baseUrl = import.meta.env.BASE_URL;

    Promise.all(
      paths.map((p) =>
        fetch(`${baseUrl}content/${p}`)
          .then((res) => {
            if (!res.ok) throw new Error(`Content not found: ${p}`);
            return res.text();
          })
          .then((raw) => parseFrontmatter(raw).data as T)
      )
    )
      .then((results) => {
        if (cancelled) return;
        setItems(results);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err as Error);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [keyRef.current]);

  return { items, loading, error };
}
