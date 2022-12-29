const redis = require('redis')
const Redis = require('ioredis');
const fs = require('fs');

// const port = process.env.REDIS_PORT || 6379

const redisClient = redis.createClient({
    host: 'redis-14321.c15.us-east-1-4.ec2.cloud.redislabs.com',
    port: 14321,
    password: process.env.REDIS-PWD
});

redisClient.connect()

redisClient.on('error', (err) => {
    console.log(err)
})



// const redis = new Redis();


module.exports = redisClient;




// let redisClient;


// (async () => {
//   redisClient = redis.createClient();

//   redisClient.on("error", (error) => console.error(`Error: ${error}`));

//   await redisClient.connect();
// })();