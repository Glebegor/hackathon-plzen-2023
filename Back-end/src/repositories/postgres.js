
const { Pool } = require('pg');
require('dotenv').config();

const config = require("../configs.js")
const DBConfig = config["configs"]["db"]
const pool = new Pool({
    user: DBConfig.Username,
    host: DBConfig.Host,
    database: DBConfig.Name,
    password: process.env.POSTGRES_PASSWORD,
    port: DBConfig.Port, 
});
module.exports = pool;