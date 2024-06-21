async function getWeather(city) {
    cityname.innerHTML = city;
    const url = "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" + city + "&days=1";
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '62dca07558mshfb4f207e4382af7p1c3708jsna517a0aaf230',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        temp_c.innerHTML = result.current.temp_c
        temp_c2.innerHTML = result.current.temp_c
        mintemp_c.innerHTML = result.forecast.forecastday[0].day.mintemp_c
        maxtemp_c.innerHTML = result.forecast.forecastday[0].day.maxtemp_c
        dewpoint_c.innerHTML = result.current.dewpoint_c
        humidity.innerHTML = result.current.humidity
        humidity2.innerHTML = result.current.humidity
        wind_dir.innerHTML = result.current.wind_dir
        wind_kph.innerHTML = result.current.wind_kph
        wind_kph2.innerHTML = result.current.wind_kph
        sunrise.innerHTML = result.forecast.forecastday[0].astro.sunrise
        sunset.innerHTML = result.forecast.forecastday[0].astro.sunset
    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault()//to prevent reload
    getWeather(city.value);

})
getWeather("Jammu");

async function othercityweather(city) {
    let othercity=city;
    document.getElementById("othercity").innerHTML=othercity
     console.log(city);

    const url = "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" + city + "&days=1";
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '62dca07558mshfb4f207e4382af7p1c3708jsna517a0aaf230',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        const elements = document.querySelectorAll('td');
        const td = Array.from(elements);
        td[0].innerHTML = result.current.temp_c
        td[1].innerHTML = result.forecast.forecastday[0].day.mintemp_c
        td[2].innerHTML   = result.forecast.forecastday[0].day.maxtemp_c
        td[3].innerHTML  = result.current.dewpoint_c
        td[4].innerHTML  = result.current.humidity
        td[5].innerHTML  = result.current.wind_dir
        td[6].innerHTML  = result.current.wind_kph
        td[7].innerHTML  = result.forecast.forecastday[0].astro.sunrise
        td[8].innerHTML  = result.forecast.forecastday[0].astro.sunset
    } catch (error) {
        console.error(error);
    }

}
othercityweather("lucknow");
othercityweather("Pune");
othercityweather("Bangalore");