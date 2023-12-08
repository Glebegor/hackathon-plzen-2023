
const { Pool } = require('pg');

const env = require('dotenv').config();
const config = require("../configs.js")
const DBConfig = config["configs"]["db"]
const pool = new Pool({
    user: DBConfig.Username,
    host: DBConfig.Host,
    database: DBConfig.Name,
    password: env.DB_PASSWORD,
    port: DBConfig.Port, 
});

module.exports = pool;