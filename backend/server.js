const app = require('./config/server_config');

const port = process.env.SERVER_PORT || 8001

app.listen(port,()=>{
    console.log(`app started http://localhost:${port}`);
})