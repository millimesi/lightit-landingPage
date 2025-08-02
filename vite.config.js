import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 8800,
    allowedHosts: [
      "e12bb5e0385a.ngrok-free.app",
      "localhost",
      "127.0.0.1",
      "::1",
    ],
    cors: true,
    strictPort: true,
  },
});
