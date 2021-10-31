import { defineConfig } from "vite";

export default defineConfig({
  base: '/',
  logLevel: "warn",
  server: {
    host: "0.0.0.0",
  },
  build: {
    rollupOptions: {
      input: "src/scripts/main.js",
    },
    manifest: true,
  },
});
