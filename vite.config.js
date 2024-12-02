import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/mobiusline/", // Replace <repo-name> with your repository name
  plugins: [react()],
});
