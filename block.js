let weatherApp = document.querySelector('.weather-app')

function renderCard(data){
    weatherApp.innerHTML = ''
    let weatherCard = document.createElement('div')
    weatherCard.classList.add('weather-card')

    let info = document.createElement('div')
    info.classList.add('info')

    let weatherIcon = document.createElement('img')
    weatherIcon.classList.add('weather-icon')
    
    let temp = Math.round(data.main.temp)
    let iconSrc = gradusIcon(temp)
    weatherIcon.innerHTML = `<img src="${iconSrc}">`

    let cityName = `<h2>${data.name}</h2>`
    let temperatura = `<p class="temperatura">${temp}°C</p>`
    let desc = `<p class="description">${data.weather[0].description}</p>`
    let speed = `<p class="speed">${data.wind.speed}m/s</p>`

    info.innerHTML = cityName + temperatura + desc + speed 
    weatherCard.append(info, weatherIcon)
    weatherApp.append(weatherCard)
}

