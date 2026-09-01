import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const here = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  // ОБЯЗАТЕЛЬНО: страница грузится с виртуального хоста, поэтому пути к ассетам
  // должны быть относительными (ONBOARDING §5.3).
  base: "./",
  plugins: [vue(), tailwindcss()],
  resolve: { alias: { "@": resolve(here, "./src") } },
  build: {
    // dist кладётся в ПАПКУ РАСШИРЕНИЯ, рядом с plugin.json. Исходники UI живут
    // СНАРУЖИ неё: PackExtension сметает в бандл всё, что не исходники C#, и утащил бы
    // node_modules вместе с ними.
    outDir: resolve(here, "../extension/dist"),
    emptyOutDir: true,
  },
});
