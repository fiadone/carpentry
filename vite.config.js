import path from 'path'
import twig from '@fiad/vite-plugin-twig'
import { filters, functions } from '@fiad/twig-addons'
import { defineConfig } from 'vite'

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
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: 'index.html'
      }
    }
  },
  plugins: [
    twig({
      filters,
      functions,
      globals: {
        publicPath: '',
        sourcePath: '/src',
        currentYear: new Date().getFullYear()
      },
      settings: {
        views: path.resolve(__dirname, 'src')
      }
    })
  ]
})
