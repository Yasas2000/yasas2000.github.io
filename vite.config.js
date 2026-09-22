import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the built site work from a user site (name.github.io)
// or from a repository sub-path without further changes.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
