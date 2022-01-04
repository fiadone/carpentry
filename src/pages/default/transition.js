import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { TRANSITION } from '~/config'

gsap.registerPlugin(ScrollTrigger)

export default {
  once: function() {
    window.scrollTo(0, 0)
    gsap.set(document.body, { opacity: 1 })
    return this.enter()
  },
  enter: function() {
    return ScrollTrigger.batch('[data-reveal]', {
      start: `top+=${TRANSITION.revealOffset} bottom`,
      onEnter: elements => gsap.fromTo(elements, {
        y: TRANSITION.revealOffset,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        duration: TRANSITION.duration,
        stagger: TRANSITION.stagger,
        ease: TRANSITION.ease
      })
    })
  },
  leave: function() {
    return gsap.to('.page', {
      autoAlpha: 0,
      duration: TRANSITION.duration,
      ease: TRANSITION.ease
    })
  }
}