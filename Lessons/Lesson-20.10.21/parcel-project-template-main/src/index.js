// Иморт 
import './sass/main.scss';
import forecast from './partials/forecast.hbs'
import main from './partials/Main.hbs'

// Function 
function renderCurrent(current, id, sample){
    let currentRoot = document.querySelector("#" + id)
    let currentHtml = sample(current)

    currentRoot.innerHTML = currentHtml
}

// Запрос 
let days = 3
let q = 'kiev'
const apiKey = 'a04e2179191b48c8839161822212010'
const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&lang=ru&days=${days}`


fetch(apiUrl)
.then((data) => data.json())
.then((res) => {
    console.log(res.current)
    renderCurrent(res.current, "todayStatick", main)

    fetch(apiUrl)
    .then((data) => data.json())
    .then((res) => {
    console.log(res.forecast.forecastday[0].day.condition.icon)
    renderCurrent(res.forecast.forecastday[0].day, "forecast-today", forecast)
    })
})


