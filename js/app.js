// ─── Do Not Show Your Api Key On Your Js File Like This ──────────────────────

const API_KEY = `e8ff186dfd1f60d78ddb2c9652ad9a1b`;
const loadTemperatute = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data => {
    setInnerTextById("temperature", data.main.temp);
    setInnerTextById("condition", data.weather[0].main);
    console.log(data);
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById("btn-search").addEventListener("click", function(){
    const searchField = document.getElementById("search-field");
    const city = searchField.value;
    document.getElementById("city-name").innerText = city;
    loadTemperatute(city);
})

loadTemperatute('dhaka');