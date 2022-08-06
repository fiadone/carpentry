import twigAddons from '@fiad/twig-addons'
import { defineConfig } from 'vite-plugin-twig'

export default defineConfig({
  extensions: {
    filters: twigAddons.filters,
    functions: twigAddons.functions
  },
  globals: {
    publicPath: '',
    sourcePath: '/src',
    currentYear: new Date().getFullYear()
  },
  settings: {
    views: 'src'
  }
})