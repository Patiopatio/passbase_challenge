import React from 'react'




const weatherResponse = {
    coord: { lon: 13.39, lat: 52.52 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
    base: "stations",
    main: {
        temp: 286.83,
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
