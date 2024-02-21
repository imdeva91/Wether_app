const apiKey='843bf8b45b468deab0e6bf53d7254f55';

const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")

const searchButton = document.querySelector(".search button")

const weatherIcons = document.querySelector(".wether_icon")



async function checkWether(city){
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await responce.json();
    console.log(data)

    

    document.querySelector(".city").innerHTML = data.name? data.name : "Incorrect Name";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

   
    if(data.weather[0].main == "Clouds"){
        weatherIcons.src = "./image/cloudy.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcons.src = "./image/sun.png"

    }else if(data.weather[0].main == "Rain"){
        weatherIcons.src = "./image/rain.webp"

    }else if(data.weather[0].main == "Drizzly"){
        weatherIcons.src = "./image/drizzly.png"

    }else if(data.weather[0].main == "Haze"){
        weatherIcons.src = "./image/haze.png"

    }


}

searchButton.addEventListener("click",()=>{
    checkWether(searchBox.value);

})