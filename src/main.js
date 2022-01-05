import barba from '@barba/core'
import pages from '~/pages'
import '~/theme'

window.addEventListener('DOMContentLoaded', () => {
  let currentPage
    
  barba.hooks.beforeEnter(async ({ next }) => {
    const importPage = pages[next.namespace] || pages.default
    const { default: Page } = await importPage()
    currentPage = new Page(next.container)
  })
  
  barba.hooks.afterLeave(() => currentPage.destroy())
  
  barba.init({
    transitions: [{
      once: () => currentPage.transition.once(),
      enter: () => currentPage.transition.enter(),
      leave: () => currentPage.transition.leave()
    }]
  })
})