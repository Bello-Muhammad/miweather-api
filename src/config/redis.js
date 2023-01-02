const redis = require('redis')


const redisClient = redis.createClient({
    url: 'redis://bello:O@O34028984@redis-14321.c15.us-east-1-4.ec2.cloud.redislabs.com:14321'
});


redisClient.on('error', (err) => {
    console.log(err)
})



redisClient.on('connect', (err) => {
    console.log("Redis Conection Established")
})

module.exports = redisClient;


