import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin.cjs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  resolve: {
    dedupe: ["svelte"],
    alias: [
      { find: "src", replacement: path.resolve(__dirname, "src") },
      {
        find: "locales",
        replacement: path.resolve(__dirname, "resources", "locales"),
      },
      {
        find: "components",
        replacement: path.resolve(__dirname, "src", "components"),
      },
    ],
  },
  plugins: [
    svelte(),
    precompileIntl(path.resolve(__dirname, "resources", "locales")),
  ],
});
