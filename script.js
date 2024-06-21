async function getWeather(city) {
    cityname.innerHTML=city;
    const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '62dca07558mshfb4f207e4382af7p1c3708jsna517a0aaf230',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        temp.innerHTML = result.main.temp
        feels_like.innerHTML = result.main.feels_like
        temp_min.innerHTML = result.main.temp_min
        temp_max.innerHTML = result.main.temp_max
        pressure.innerHTML = result.main.pressure
        humidity.innerHTML = result.main.humidity
    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault()//to prevent reload
    getWeather(city.value);

})
getWeather("Jammu");


