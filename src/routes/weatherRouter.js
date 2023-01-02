const express = require('express')
const { get_defaulCities, 
    get_home, 
    get_cityWeather
} = require('../controller/weatherController')
const cache = require('../middleware/cached')

const router = express.Router()


// router.get('/', get_defaulCities)

router.get('/', get_home)

router.get('/weather', cache, get_cityWeather)


module.exports = router