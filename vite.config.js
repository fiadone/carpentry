import { defineConfig } from 'vite'
import purgecss from '@fullhuman/postcss-purgecss'
import twig from 'vite-plugin-twig'

export default defineConfig(({ command }) => ({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html'
      }
    }
  },
  css: {
    postcss: {
      plugins: (command !== 'build') ? [] : [
        purgecss({
          content: ['./**/*.html', './src/**/*.twig']
        })
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "~/theme/core";'
      }
    }
  },
  plugins: [
    twig()
  ],
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss'],
    alias: {
      '~': '/src'
    }
  }
}))