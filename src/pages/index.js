/**
 * By default the pages are lazy loaded via dynamic import.
 * Look at https://vitejs.dev/guide/features.html#glob-import to learn more.
 */
const pages = import.meta.glob('./**/index.js')

export default Object.entries(pages).reduce((acc, [filename, importHandler]) => {
  const key = filename.replace('/index.js', '').split('/').pop()
  return { ...acc, [key]: importHandler }
}, {})