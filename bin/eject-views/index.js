const path = require('path')
const glob = require('glob')
const fs = require('fs-extra')
const { getTemplateFilename, getTemplateContent } = require('./utils')

const cwd = process.cwd()
const srcPath = path.join(cwd, 'src')
const distPath = path.join(cwd, 'dist/views')
const sourceFiles = glob.sync(path.join(srcPath, '**/*.twig'), {
  ignore: [
    '.git/**',
    'bin/**',
    'dist/**',
    'node_modules/**',
    'public/**',
    'src/**'
  ]
})

fs.emptyDirSync(distPath)

sourceFiles.forEach(filepath => {
  const filename = getTemplateFilename(filepath, srcPath, distPath)
  const content = getTemplateContent(filepath)
  if (!filename || !content) return
  fs.outputFileSync(filename, content)
})