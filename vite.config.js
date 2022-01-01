import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import twig from '@fiad/vite-plugin-twig'

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
      globals: {
        assetsPath: '/src',
        publicPath: ''
      }
    }),
    legacy({ targets: ['defaults', 'not IE 11'] })
  ]
})
