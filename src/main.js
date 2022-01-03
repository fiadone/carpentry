import '~/theme'
import pages from '~/pages'
import barba from '@barba/core'

let currentPage

barba.hooks.beforeEnter(async ({ next }) => {
  const load = pages[next.namespace] || pages.default
  const { default: Page } = await load()
  currentPage = new Page(next.container)
})

barba.hooks.afterLeave(() => currentPage.destroy())

barba.init({
  transitions: [{
    once: () => currentPage.enter(),
    enter: () => currentPage.enter(),
    leave: () => currentPage.leave()
  }]
})