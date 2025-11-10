const app = require('./config/server_config');
const start_consumer = require('./services/kafka_consumer');

const port = process.env.SERVER_PORT || 8001;

start_consumer().catch(err=> console.log('start consumer err-->', err));

app.listen(port,()=>{
    console.log(`app started http://localhost:${port}`);
})