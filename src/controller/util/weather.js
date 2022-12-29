const request = require('request')


const fetchWeather = async (city, callback) => {

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_key}`;

    // Request for data using url
    request(url, (error, response, body) => {

      // console.log(body)
        let weather = JSON.parse(body);

        if(error) {
            callback('unable to connect to openweather service', undefined )
        } else if(weather.error) {
            callback('unable to get location weather', undefined)
        } else {
            
            let place = `${weather.name}, ${weather.sys.country}`,
                /* you shall calculate the current timezone using the data fetched*/
                weatherTimezone = `${new Date(
                  weather.dt * 1000 - weather.timezone * 1000
                )}`;

                let sunRise = `${new Date(weather.sys.sunrise * 1000)}`;
                let sunSet = `${new Date(weather.sys.sunset * 1000)}`;
              let weatherTemp = `${weather.main.temp}`,
                weatherPressure = `${weather.main.pressure}`,
                /* you will fetch the weather icon and its size using the icon data*/
                weatherIcon = 'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png',
                weatherDescription = `${weather.weather[0].description}`,
                humidity = `${weather.main.humidity}`,
                clouds = `${weather.clouds.all}`,
                visibility = `${weather.visibility}`,
                main = `${weather.weather[0].main}`,
                weatherFahrenheit;
              weatherFahrenheit = (weatherTemp * 9) / 5 + 32;

              // you shall also round off the value of the degrees fahrenheit calculated into two decimal places
              function roundToTwo(num) {
                return +(Math.round(num + "e+2") + "e-2");
              }
              weatherFahrenheit = roundToTwo(weatherFahrenheit);

              let date = weatherTimezone.substring(4,15)
              let day = weatherTimezone.substring(0,3)
              let sR = sunRise.substring(17,21)
              let sS = sunSet.substring(17,21)
              let windSpeed = weather.wind.speed

            callback(undefined, {
                weather: weather,
                place: place,
                temp: weatherTemp,
                pressure: weatherPressure,
                icon: weatherIcon,
                description: weatherDescription,
                speed: windSpeed,
                sunrise: sR,
                sunset: sS,
                day: day,
                date: date,
                humidity: humidity,
                fahrenheit: weatherFahrenheit,
                clouds: clouds,
                visibility: visibility,
                main: main,
                error: null,
              })
        }
    })


}


module.exports = fetchWeather;