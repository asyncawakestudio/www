import { defineConfig } from "vite";
import { plugin as markdown, Mode } from "vite-plugin-markdown";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "",
  plugins: [markdown({ mode: [Mode.HTML] }), react()],
});
