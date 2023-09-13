const redis = require('redis')


const redisClient = redis.createClient({
    url: process.env.REDIS_URL
});

redisClient.connect()

redisClient.on('error', (err) => {
    console.log(err)
})



module.exports = redisClient;




// let redisClient;


// (async () => {
//   redisClient = redis.createClient();

//   redisClient.on("error", (error) => console.error(`Error: ${error}`));

//   await redisClient.connect();
// })();
