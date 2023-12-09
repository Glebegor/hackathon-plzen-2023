const config = require("./src/configs")
require('dotenv').config();
const DB_PASSWORD = process.env.POSTGRES_PASSWORD;

module.exports = {   
    "driver": "pg",   
    "host": config["configs"]["db"]["Host"],
    "port": config["configs"]["db"]["Port"],   
    "user": config["configs"]["db"]["Username"],      
    "password": DB_PASSWORD,   
    "database": config["configs"]["db"],   
    "multipleStatements": true,   
    "migrationsDir": "./migrations",
    "dir": "./migrations" 
};