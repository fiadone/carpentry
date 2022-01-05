import { defineConfig } from 'vite'
import twig from 'vite-plugin-twig'
import purgecss from '@fullhuman/postcss-purgecss'

export default defineConfig(({ command }) => ({
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
    ...(command !== 'build')
      ? null
      : {
        postcss: {
          plugins: [
            purgecss({
              content: ['./**/*.html', './src/**/*.twig']
            })
          ]
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
}))