import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const here = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  // REQUIRED: the page loads from a virtual host, so asset paths must be relative
  // (ONBOARDING §5.3).
  base: "./",
  plugins: [vue(), tailwindcss()],
  resolve: { alias: { "@": resolve(here, "./src") } },
  build: {
    // dist goes into the EXTENSION folder, beside plugin.json. The UI sources live OUTSIDE it:
    // PackExtension sweeps everything that is not C# source into the bundle, and would have
    // taken node_modules along with them.
    outDir: resolve(here, "../extension/dist"),
    emptyOutDir: true,
    // Two entry points, two ribbon buttons: the manager window and the dockable palette.
    rollupOptions: {
      input: {
        index: resolve(here, "index.html"),
        palette: resolve(here, "palette.html"),
      },
    },
  },
});
