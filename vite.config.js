import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],

  build: {
    chunkSizeWarningLimit: 1500,
    cssCodeSplit: false,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("scheduler")
          ) return "react-vendor";

          if (id.includes("framer-motion")) return "framer";
          if (id.includes("gsap")) return "gsap";
          if (id.includes("@splinetool")) return "spline";
          if (id.includes("react-helmet-async")) return "helmet";
          if (id.includes("react-intersection-observer")) return "intersection";

          return "vendor";
        },
      },
    },
  },
});