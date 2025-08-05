import { defineConfig } from "vite"

export default defineConfig({

  // root: "parser/pages",

  server : {
    host: "0.0.0.0",
    port: 5173,

    proxy: {
      '/app': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false
      },

      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    }
  },

  // optimizeDeps: {
  //   exclude: ["@tailwindcss/vite"]
  // },

  // plugins: [
  //   tailwindcss(),
  // ],

})