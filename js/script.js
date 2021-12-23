function starTimer(day, duration, display) {
  let days = day,
    hours = duration,
    minutes = 60,
    seconds = 60

  setInterval(function () {
    hours = hours < 10 && hours.toString().length < 2 ? '0' + hours : hours
    minutes =
      minutes < 10 && minutes.toString().length < 2 ? '0' + minutes : minutes
    seconds =
      seconds < 10 && seconds.toString().length < 2 ? '0' + seconds : seconds

    display[0].textContent = days + ':'
    display[1].textContent = hours + ':'
    display[2].textContent = minutes + ':'
    display[3].textContent = seconds

    if (--seconds < 0) {
      --minutes
      seconds = 60
      if (minutes < 0) {
        minutes = 10
        --hours
        if (hours < 0) {
          hours = 60
          --days
          if (days < 0) {
            days = day
            hours = duration
          }
        }
      }
    }
  }, 1000)
}

window.onload = function () {
  let display = [
    document.querySelector('.day'),
    document.querySelector('.hours'),
    document.querySelector('.minutes'),
    document.querySelector('.seconds')
  ]

  starTimer(10, 5, display)
}
