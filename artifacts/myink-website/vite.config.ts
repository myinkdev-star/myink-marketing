import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { readFileSync } from "fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import yaml from "js-yaml";

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    "BASE_PATH environment variable is required but was not provided.",
  );
}

// ─── Markdown → JS plugin ───────────────────────────────────────────────────
// Transforms any imported *.md file into a JS module that exports:
//   { data: <parsed YAML frontmatter>, body: <markdown body string> }
// Runs at build time (Node.js), so no browser Buffer issues.
// Allows import.meta.glob('../content/**/*.md', { eager: true }) to produce
// pre-parsed content that is compiled into the bundle — zero runtime fetches.
function markdownFrontmatterPlugin(): Plugin {
  return {
    name: "markdown-frontmatter",
    transform(src, id) {
      if (!id.endsWith(".md")) return;

      const match = src.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)/);
      let data: unknown = {};
      let body = src;

      if (match) {
        try {
          data = yaml.load(match[1]) ?? {};
          body = match[2].trim();
        } catch {
          data = {};
          body = src;
        }
      }

      return {
        code: `export default ${JSON.stringify({ data, body })}`,
        map: null,
      };
    },
  };
}

// ─── Dev: serve public/admin for /admin routes ──────────────────────────────
const serveAdminPlugin: Plugin = {
  name: "serve-admin-static",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url ?? "";
      if (url === "/admin" || url === "/admin/" || url === "/admin/index.html") {
        const adminHtml = readFileSync(
          path.resolve(import.meta.dirname, "public/admin/index.html"),
          "utf-8"
        );
        res.setHeader("Content-Type", "text/html");
        res.end(adminHtml);
        return;
      }
      next();
    });
  },
};

export default defineConfig({
  base: basePath,
  plugins: [
    markdownFrontmatterPlugin(),
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    serveAdminPlugin,
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
