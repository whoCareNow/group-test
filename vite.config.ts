import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  mode: "development",
  /*  root: "./index.html",
  base: "/", */
  publicDir: "public",
  plugins: [react()],
  resolve: {
    alias: {},
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  clearScreen: false,
});
