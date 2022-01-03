const path = require('path')
const twigAddons = require('@fiad/twig-addons')

module.exports = {
  filters: twigAddons.filters,
  functions: twigAddons.functions,
  globals: {
    publicPath: '',
    sourcePath: '/src',
    currentYear: new Date().getFullYear()
  },
  settings: {
    views: path.resolve(__dirname, 'src')
  }
}