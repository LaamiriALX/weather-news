
async function checkweather (){
    const search = document.querySelector("#search")
    const weather = document.querySelector(".weather").style.display= "block"
    const apikey = "dae836faf570ac0e46fea9c3019c1b59"
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search.value}` 
    const response = await fetch(apiurl + `&appid=${apikey}`);
    const data = await response.json();
    console.log(search)
    console.log(data)
    let weatherIcon = document.querySelector(".weather-icon")
    if(data.weather[0].main === 'Clear' || data.weather[0].main==="Sand"){
        weatherIcon.innerHTML = `<img src="images/clear.png" alt="">`
    }
    else if(data.weather[0].main==="Clouds" ){
        weatherIcon.innerHTML = `<img src="images/clouds.png" alt="">`
    }
    else if(data.weather[0].main==="Drizzle"){
        weatherIcon.innerHTML = `<img src="images/drizzle.png" alt="">`
    }
    else if(data.weather[0].main==="Mist"){
        weatherIcon.innerHTML = `<img src="images/mist.png" alt="">`
    }
    else if(data.weather[0].main==="Rain"){
        weatherIcon.innerHTML = `<img src="images/rain.png" alt="">`
    }
    else if(data.weather[0].main==="Snow"){
        weatherIcon.innerHTML = `<img src="images/snow.png" alt="">`
    }
    else if(data.weather[0].main==="Thunderstorm"){
        weatherIcon.innerHTML = `<img src="images/thunderstorm.png" alt="">`
    }
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".humidity").innerHTML = data.main.humidity
    document.querySelector(".wind").innerHTML = data.wind.speed

}

