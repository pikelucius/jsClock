
const timVisare = document.querySelector('[data-timme]')
const minutVisare = document.querySelector('[data-minut]')
const sekundVisare = document.querySelector('[data-sekund]')

const setClock = () => {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(sekundVisare, secondsRatio)
    setRotation(minutVisare, minutesRatio)
    setRotation(timVisare, hoursRatio)

}

const setRotation = (element, rotationRatio) => {
  element.style.setProperty('--visare', rotationRatio * 360)
}
setInterval(setClock, 1000)

setClock()