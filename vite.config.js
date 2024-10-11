import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs/promises";
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },

  esbuild: {
    loader: "jsx",
    // Apply the loader explicitly for both .js and .jsx files in the src directory
    include: [/src\/.*\.jsx?$/],
    exclude: [],
  },

  server: {
    port: 80,
  },

  preview: {
    port: 80,
  },

  plugins: [svgr(), react()],

  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".jsx": "jsx",
      },
    },
  },
});
