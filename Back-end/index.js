const express = require('express');
const bodyParser = require('body-parser')

// Configs and environments
const config = require("./src/configs")
const env = require('dotenv').config();

// DB connection
const DBConfig = config["configs"]["db"]
const { Pool } = require('pg');
const pool = new Pool({
    user: DBConfig.Username,
    host: DBConfig.Host,
    database: DBConfig.Name,
    password: env.DB_PASSWORD,
    port: DBConfig.Port, 
});

// Application setup
const app = express();
const PORT = process.env.PORT || config["configs"]["PORT"];

// Parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Handlers
const authRoutes = require('./src/routers/authRoutes');
app.use('/auth', authRoutes);

const apiRoutes = require('./src/routers/apiRoutes');
app.use('/api', apiRoutes);

const HomeRoutes = require('./src/routers/homeRoutes');
app.use('/', HomeRoutes)

// Run application
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});