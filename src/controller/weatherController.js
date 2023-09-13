const Client = require('../config/redis')
const fetchWeather = require('./util/weather')


const get_defaulCities = async (req, res) => {

  // console.log(city)

  const cities = ['lagos', 'abuja', 'dutse']

  cities.forEach((city) => {
    fetchWeather(city).then(
    async (forecastData) => {
      // console.log(forecastData)
      await Client.set(city, JSON.stringify(forecastData),{
            EX: 7200,
            NX: true,
        })
    })
    
  })

  res.redirect('/home')

}

const get_home = async (req, res) => {

    let result;
    let details = [];
    let cities = ['lagos', 'abuja', 'dutse'];
  
    try {
      
      for(let place in cities) {
        
        const city = cities[place]
        
        const cache = await Client.get(city)
  
        result = JSON.parse(cache)
        details.push(result)
  
  
      }
  
      if(details[0] == null) {
        res.redirect('/')
      }

      res.render('index',{ locations: details})
      // console.log(details)
  
    } catch (error) {
  
      console.log(error)
      
    }
  
}

const post_cityWeather = async(req, res) => {

    let {city} = req.query

    fetchWeather(city).then(
      async (forecastData) => {
        
        await Client.set(city, JSON.stringify(forecastData),{
              EX: 7200,
              NX: true,
          })

        res.render('weather', {location: forecastData})
      })

  
}


module.exports = {
    get_defaulCities,
    get_home,
    post_cityWeather
}
