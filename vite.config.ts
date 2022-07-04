import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./public/sass/mixins.scss";@import "./public/sass/variables.scss";@import "./public/sass/button.scss";`,
      },
    },
  },
})
