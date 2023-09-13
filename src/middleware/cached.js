const Client = require('../config/redis')

const cacheData = async(req, res, next) => {
    const {city} = req.query
    try {
        
        const cacheResult = await Client.get(city)
        if(cacheResult) {
            let details = JSON.parse(cacheResult);
            res.render('weather', {location: details})
        }else{
            next()
        }
    } catch (error) {
       res.redirect('/') 
    }
}

module.exports = cacheData;
