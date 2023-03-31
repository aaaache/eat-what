import { defineConfig ,loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig(({ command, mode }) => {
  return {
    base: loadEnv(mode, process.cwd()).VITE_APP_PATH,
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src"),
      },
    },
    plugins: [vue()],
    server: {
      port: 3000, // 打开的端口号
      open: true, // 运行时打开浏览器
    },
  }
});
