import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";
import path from "path";
import fs from "fs";
const lessToJS = require("less-vars-to-js");
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./config/variables.less"), "utf8")
);

const env = process.argv[process.argv.length - 1];
/* const base = config[env]; */
// https://vitejs.dev/config/
export default defineConfig({
  mode: "development",
  /*  root: "./index.html",
  base: "/", */
  publicDir: "public",
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {},
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables,
      },
    },
  },
  clearScreen: false,
});
