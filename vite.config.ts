// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, componentTagger (dev-only),
//     VITE_* env injection, @ path alias, React/TanStack dedupe, error logger plugins,
//     and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import netlify from "@netlify/vite-plugin-tanstack-start";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Netlify: disable Cloudflare Workers build; use @netlify/vite-plugin-tanstack-start instead.
// Custom server entry (src/server.ts) wraps TanStack SSR with branded error pages.
export default defineConfig({
  cloudflare: false,
  plugins: [netlify()],
  tanstackStart: {
    server: { entry: "server" },
  },
});
