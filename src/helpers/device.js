import Store from '@fiad/toolbox/store'

class Device extends Store {
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      breakpoint: Device.getBreakpoint(),
      orientation: Device.getOrientation()
    })

    window.addEventListener('resize', () => {
      this.set('width', window.innerWidth)
      this.set('height', window.innerHeight)
      this.set('breakpoint', Device.getBreakpoint())
      this.set('orientation', Device.getOrientation())
    })
  }

  is(value) {
    return Object.values(this.get()).includes(value)
  }

  static getOrientation() {
    return window.matchMedia('(orientation: portrait)').matches
      ? 'portrait'
      : 'landscape'
  }
  
  static getBreakpoint() {
    switch (true) {
      case (window.innerWidth < 1024):
        return 'sm'
      case (window.innerWidth < 1280):
        return 'md'
      case (window.innerWidth < 1440):
        return 'lg'
      default:
        return 'xl'
    }
  }
}

export default new Device()
