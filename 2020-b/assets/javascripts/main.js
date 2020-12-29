class NameFlipper {
  constructor() {
    this.nameContainer = document.querySelector('.cover-name-container')
    this.name = document.querySelector('.cover-name')
    this.running = false
  }

  watch() {
    this.nameContainer.addEventListener('mouseover', () => {
      this.flipName()
    })
  }

  flipName() {
    if (this.running == true) return false

    this.running = true

    this.flipWith('lu-han fer-noh')
    this.flipBackWith('Luján Fernaud')

    window.setTimeout(() => {
      this.running = false
    }, 4700)
  }

  flipWith(message) {
    this.name.classList.toggle('flip')

    window.setTimeout(() => {
      this.name.innerText = message
    }, 500)

    window.setTimeout(() => {
      this.name.classList.toggle('flip')
    }, 1000)
  }

  flipBackWith(message) {
    window.setTimeout(() => {
      this.flipWith(message)
    }, 3700)
  }

  fadeOut(element) {
    element.classList.add('opacity-hidden')
  }

  fadeIn(element) {
    element.classList.remove('opacity-hidden')
  }
}

new NameFlipper().watch()
