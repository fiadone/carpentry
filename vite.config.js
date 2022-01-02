import { defineConfig } from 'vite'
import twig from '@fiad/vite-plugin-twig'
import { filters, functions } from '@fiad/twig-addons'

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
        assetsPath: '/src',
        publicPath: ''
      }
    })
  ]
})
