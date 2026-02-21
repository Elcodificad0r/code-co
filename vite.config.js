import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],

  build: {
    chunkSizeWarningLimit: 1500, // solo para el warning visual

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          // 🔹 React core
          if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("scheduler")
          ) {
            return "react-vendor";
          }

          // 🔹 Animaciones
          if (id.includes("framer-motion")) {
            return "framer";
          }

          if (id.includes("gsap")) {
            return "gsap";
          }

          // 🔹 3D (muy pesado)
          if (id.includes("@splinetool")) {
            return "spline";
          }

          // 🔹 Helmet
          if (id.includes("react-helmet-async")) {
            return "helmet";
          }

          // 🔹 Intersection Observer
          if (id.includes("react-intersection-observer")) {
            return "intersection";
          }

          // 🔹 Todo lo demás
          return "vendor";
        },
      },
    },
  },
});