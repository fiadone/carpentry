import { defineConfig } from 'vite'
import twig from 'vite-plugin-twig'

export default defineConfig({
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss'],
    alias: {
      '~': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "~/theme/core";'
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: 'index.html'
      }
    }
  },
  plugins: [
    twig()
  ]
})