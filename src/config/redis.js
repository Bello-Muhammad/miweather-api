const redis = require('redis')


const redisClient = redis.createClient({
    url: process.env.REDIS_URL
});



redisClient.on('error', (err) => {
    console.log(err)
})



redisClient.on('connect', (err) => {
    console.log("Redis Conection Established")
})

module.exports = redisClient;


