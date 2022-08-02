import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import fs from 'fs';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem'),
    },
    host: 'fashion.elsif.in',
    port: 3000
  },
})
