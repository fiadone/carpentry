const pages = import.meta.glob('./**/index.js')

export default Object.entries(pages).reduce((acc, [filename, importPage]) => {
  const key = filename.replace('/index.js', '').split('/').pop()
  acc[key] = importPage
  return acc
}, {})