const pool = require('./config/db_config');

const db_init = async()=>{
try{
const res = await pool.query(`select now()`);
console.log('db connection successfull', res.rows);
}
catch(err){
    console.log('error while db connection ---->', err);
}
}

module.exports = db_init;