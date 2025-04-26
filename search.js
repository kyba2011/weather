let searchInput = document.querySelector('input')
let searchBtn = document.querySelector('button')

async function clickSearch() {
    let city = searchInput.value
    if (!city) {
        alert('Please enter a city name')
    }
    else {
        let weatherData = await renferFetch(city)
        renderCard(weatherData)
        searchInput.value = '' // очистка поля ввода после поиска

    }
}

searchBtn.addEventListener('click', clickSearch)