const redis = require('redis')

const port = process.env.REDIS_PORT || 6379

const redisClient = redis.createClient(port);

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