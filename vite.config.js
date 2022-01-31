import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  resolve: {
    dedupe: ["svelte"],
    alias: [
      { find: "src", replacement: path.resolve("src") },
      {
        find: "components",
        replacement: path.resolve("src", "components"),
      },
    ],
  },
  plugins: [svelte(), precompileIntl(path.resolve("resources", "locales"))],
});
