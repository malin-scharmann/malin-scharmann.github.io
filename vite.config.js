import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 43123,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 43123,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        work: resolve(__dirname, "work.html"),
        about: resolve(__dirname, "about.html"),
        resume: resolve(__dirname, "resume.html"),
        contact: resolve(__dirname, "contact.html"),
        projects: resolve(__dirname, "projects.html"),
      },
    },
  },
});
