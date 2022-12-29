const Client = require('../config/redis')
const fetchWeather = require('./util/weather')


const get_defaulCities = async (req, res) => {

    let cities = ['lagos', 'abuja', 'maiduguri', 'dutse'];
    try{

      await cities.forEach(async (city) => {
          fetchWeather(city, async(error, forcastData) => {
            if(error) {
              console.log(error)
            }
            // 7200
            console.log(forcastData)
            await Client.set(city, JSON.stringify(forcastData), {
              EX: 7200,
              NX: true,
          })
          })
      })
  
      res.redirect('/home')
    }catch(error){
      console.log('Try again later')
    }

}

const get_home = async (req, res) => {

    let result;
    let details = [];
    let cities = ['lagos', 'abuja', 'maiduguri', 'dutse'];
  
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

const get_cityWeather = async(req, res) => {

    // console.log(req.query.city)
    let city = req.query.city
    fetchWeather(city, async(error, forcastData) => {
      if(error) {
        console.log(error)
      }
  
      
      await Client.set(city, JSON.stringify(forcastData), {
        EX: 7200,
        NX: true,
    })
  
      res.render('weather', {location: forcastData})
    })
  
}


module.exports = {
    get_defaulCities,
    get_home,
    get_cityWeather
}