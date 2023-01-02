const redis = require('redis')


const redisClient = redis.createClient({
    url: 'redis://bello:O@o34028984@redis-14321.c15.us-east-1-4.ec2.cloud.redislabs.com:14321'
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