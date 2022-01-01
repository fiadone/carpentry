import Store from '@fiad/toolbox/store'
import { BREAKPOINTS } from '~/config'

function getOrientation() {
  return window.matchMedia('(orientation: portrait)')
    ? 'portrait'
    : 'landscape'
}

function getBreakpoint() {
  if (window.innerWidth < BREAKPOINTS.tablet) {
    return 'phone'
  }

  return (window.innerWidth < BREAKPOINTS.desktop)
    ? 'tablet'
    : 'desktop'
}

const device = new Store({
  width: window.innerWidth,
  height: window.innerHeight,
  breakpoint: getBreakpoint(),
  orientation: getOrientation()
})

window.addEventListener('resize', () => {
  device.set('width', window.innerWidth)
  device.set('height', window.innerHeight)
  device.set('breakpoint', getBreakpoint())
  device.set('orientation', getOrientation())
})

export default device
