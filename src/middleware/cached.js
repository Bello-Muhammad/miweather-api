const Client = require('../config/redis')

const cacheData = async(req, res, next) => {
    const city = req.body.city
    let details
    try {
        
        const cacheResult = await Client.get(city)
        if(cacheResult) {
            details = JSON.parse(cacheResult);
            // console.log('coming from here')
            res.render('weather', {location: details})
        }else{
            next()
        }
    } catch (error) {
       console.log(error) 
    }
}

module.exports = cacheData;