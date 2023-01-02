const express = require('express')
const { 
    get_defaulCities, 
    get_home,
    post_cityWeather
} = require('../controller/weatherController')
const cache = require('../middleware/cached')

const router = express.Router()


router.get('/', get_defaulCities)

router.get('/home', get_home)

router.post('/weather', cache, post_cityWeather)


module.exports = router