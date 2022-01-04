import Component from '@fiad/toolbox/component'
import SmoothScroll from '@fiad/toolbox/smooth-scroll'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import defaultTransition from './transition'
import './style'

gsap.registerPlugin(ScrollTrigger)

class DefaultPage extends Component {
  constructor(el, { transition, ...options } = {}) {
    super(el, options)

    this.transition = transition || defaultTransition
    this.scroller = new SmoothScroll({ onScroll: ScrollTrigger.update })

    ScrollTrigger.scrollerProxy('[data-smooth-scroll]', {
      scrollTop: value => {
        return (arguments.length)
          ? this.scroller.scrollTo(value)
          : this.scroller.scrollTop
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        }
      }
    })
  }

  destroy() {
    this.scroller.destroy()
  }
}

export default DefaultPage