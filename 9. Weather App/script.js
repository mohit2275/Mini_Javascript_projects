const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

let form = document.getElementById('ourForm');
let search = document.getElementById('search');
let details = document.getElementById('details');



let getWeather = (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            if (data.cod == 404) {
                details.innerHTML = `<h1>City Not Found</>`
                return;
            }

            details.innerHTML = `
            <div class="temp1">
            <img src= "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" id="pic">
                <div class="text">
                    <h1>${data.main.temp}</h1>
                    <h3>${data.weather[0].main}</h3>
                </div>
            </div>
            <div class="temp2">
                <h2>${data.name} </h2>
                <hr>
                <p>Wind Speed : ${data.wind.speed} and ${data.wind.speed} deg</p>
                <div style="display: flex;justify-content: space-between;">
                    <p> Visibility: ${data.visibility}</p>
                    <p>Base : Stations</p>
                </div>
                <p>Coordinates are <br><strong>Lon : </strong> ${data.coord.lon} , <strong>Lat : </strong> ${data.coord.lat} </p>
            </div>
            `
        })
}

let weather = () => {
    let city = search.value;
    getWeather(city);
    return false;
}
