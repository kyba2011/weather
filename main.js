let url = "https://api.openweathermap.org/data/2.5/weather" // бекенд данный ссылкасы
let apiKey = "f6c633486cde5a1e7dd29e8fa552bb83"    // ключ 

async function renferFetch(city){
    try{
        const res = await fetch(`${url}?q=${city}&units=metric&appid=${apiKey}`) // запрос
        if (!res.ok) {
            alert('City not found')
        }
        const data = await res.json() // json форматка конвертация
        return data // json форматтагы данные кайтарат
    }
    catch (error) {
        console.log('Error') // ошибка
    }
}

function gradusIcon(temp){
    if (temp <= 0){
        return `<img src="img/snow.svg">`
    }
    else if (temp < 15 && temp <= 30){
        return `<img src="img/rain.svg">`
    }
    else{
        return `<img src="img/sunny.svg">`
    }
}