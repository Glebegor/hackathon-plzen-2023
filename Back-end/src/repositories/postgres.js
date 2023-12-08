
const { Pool } = require('pg');

const config = require("../config")
const DBConfig = config["configs"]["db"]
const pool = new Pool({
    user: DBConfig.Username,
    host: DBConfig.Host,
    database: DBConfig.Name,
    password: env.DB_PASSWORD,
    port: DBConfig.Port, 
});

module.exports = pool;