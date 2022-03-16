import { defineConfig } from 'vite'
import Twig from 'vite-plugin-twig'
import WindiCSS from 'vite-plugin-windicss'
import PurgeCSS from '@fullhuman/postcss-purgecss'
import { glob } from 'glob'

export default defineConfig(({ command }) => ({
  build: {
    manifest: true,
    rollupOptions: {
      input: glob.sync('**/*.html', {
        ignore: [
          '.git/**',
          'bin/**',
          'dist/**',
          'node_modules/**',
          'public/**',
          'src/**'
        ]
      })
    }
  },
  css: {
    postcss: {
      plugins: (command === 'build') && [
        PurgeCSS({
          content: ['**/*.{html,twig}'],
          skippedContentGlobs: [
            '.git/**',
            'bin/**',
            'dist/**',
            'node_modules/**',
            'public/**'
          ]
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
    Twig(),
    WindiCSS()
  ],
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss'],
    alias: {
      '~': '/src'
    }
  }
}))