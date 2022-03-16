const path = require('path')
const fs = require('fs-extra')

module.exports.getTemplateFilename = function(file, srcPath, distPath) {
  try {
    const base = path.dirname(file).replace(srcPath, distPath)
    const name = path.basename(file, '.twig')
    return `${(name === 'template') ? base : path.join(base, name)}.twig`
  } catch {
    return null
  }
}

module.exports.getTemplateContent = function(file) {
  try {
    return (
      fs.readFileSync(file)
        .toString()
        .replace(/({{\s?(sourcePath|publicPath)\s?}}|\/template)/g, ''))
        .replace(/(\s)*<script type="module" src="\/main.js"><\/script>/, '')
  } catch {
    return null
  }
}