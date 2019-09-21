import React, {useState, useEffect} from 'react'
import axios from "axios";
import Form from '../components/form/form'
import WeatherDetails from '../components/weather/weather-details'


const weatherResponse = {
    coord: { lon: 13.39, lat: 52.52 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
    base: "stations",
    main: {
        temp: 27,
        pressure: 1027,
        humidity: 54,
        temp_min: 284.82,
        temp_max: 288.15
    },
    visibility: 10000,
    wind: { speed: 2.1, deg: 290 },
    clouds: { all: 0 },
    dt: 1568914162,
    sys: {
        type: 1,
        id: 1275,
        message: 0.0073,
        country: "DE",
        sunrise: 1568868396,
        sunset: 1568913259
    },
    timezone: 7200,
    id: 2950159,
    name: "Berlin",
    cod: 200
};
export default () => {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState("")
    const [isMetric, setIsMetric] = useState(true)
    const [isLoading, setIsLoading] = useState(false);
    const [isErrrorDisplay, setIsDisplayError] = useState(false);

useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true)
        const weatherResponse = await _getWeatherByCity(city)
        setWeather(weatherResponse)
        setIsLoading(false)
    }
    if (city) fetchData();
}, [city])

const _getWeatherByCity = city => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=360f5bc55ffe43108eb3bf16a385bf75&units=metric`
    return axios
        .get(url)
        .then(response => {
            setIsDisplayError(false);
            return _map (response.data)
    })
}

    const onSubmit = (event, cityInput) => {
        event.preventDefault()
        setCity(cityInput)
    }

    const _map = response => {
        return {
            time: _mapTime(response.dt),
            temperature: _mapTemperature(response.main.temp),
            condition: response.weather[0].description
        }
       
    }
    const _mapTime = (timestamp) => {
        const time = new Date(timestamp)
        return time.getHours() + ":" + time.getMinutes()
    }

    const _mapTemperature = (temp) => {
        return temp + " °C" 
    }


    return (
    <div>
        <h1>Weather forecast for {city}</h1>
        <WeatherDetails
        time={weather.time} 
        temperature={
            isMetric ? weather.temperature : (weather.temperature * 9) / 5 + 32
          }
        unit={isMetric ? "°C" : "°F"}
        condition={weather.condition}
        />
        <h2>Find a Forecast</h2>
        <h2>Search</h2>
        <Form onSubmit={onSubmit}/>
    </div>
    )

    // 2. return hello world
    // 3. Hardcoded display of all elements 
    // 4. Use mock state as dynamic elements
}