/**
 * Build-time content loader.
 *
 * The Vite `markdownFrontmatterPlugin` (vite.config.ts) transforms every
 * imported *.md file into a JS module that exports { data, body } with the
 * frontmatter already parsed.  import.meta.glob with { eager: true } bundles
 * all matching files at compile time — no runtime fetches, no loading states.
 *
 * On Netlify the workflow is:
 *   editor saves in CMS → git commit to src/content/ → Netlify build triggered
 *   → Vite bundles the new .md data into the JS → live site updated.
 */

interface FileModule {
  data: unknown;
  body: string;
}

// Eagerly import every content file as a pre-parsed module.
// Keys are paths relative to THIS file (src/hooks/), e.g.:
//   "../content/home.md"
//   "../content/services/01-brand-strategy.md"
const MODULES = import.meta.glob<FileModule>("../content/**/*.md", {
  eager: true,
  import: "default",
});

// ─── Internal ────────────────────────────────────────────────────────────────

function getModule<T>(path: string): { data: T; body: string } {
  const key = `../content/${path}`;
  const mod = MODULES[key];
  if (!mod) {
    if (import.meta.env.DEV) {
      console.warn(`[useContent] content file not found: ${path}`);
    }
    return { data: {} as T, body: "" };
  }
  return { data: mod.data as T, body: mod.body };
}

// ─── Public API ──────────────────────────────────────────────────────────────

interface ContentResult<T> {
  data: T;
  body: string;
  loading: false;
  error: null;
}

interface CollectionResult<T> {
  items: T[];
  loading: false;
  error: null;
}

/**
 * Returns parsed frontmatter + body for a single content file.
 *
 * @param path  Relative to src/content/, e.g. "home.md" or "services/01-brand-strategy.md"
 */
export function useContent<T = Record<string, unknown>>(
  path: string
): ContentResult<T> {
  const { data, body } = getModule<T>(path);
  return { data, body, loading: false, error: null };
}

/**
 * Returns an array of parsed frontmatter objects for multiple content files.
 *
 * @param paths  Array of paths relative to src/content/
 */
export function useContentCollection<T = Record<string, unknown>>(
  paths: string[]
): CollectionResult<T> {
  const items = paths.map((p) => getModule<T>(p).data);
  return { items, loading: false, error: null };
}
