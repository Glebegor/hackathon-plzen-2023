const express = require('express');

// Configs and environments
const config = require('config-yml').load('config/configs.yml')
const env = require('dotenv').config();

const DBConfig = config["db"]

const pool = new Pool({
    user: DBConfig["username"],
    host: DBConfig["host"],
    database: DBConfig["name"],
    password: env["DB_PASSWORD"],
    port: DBConfig["port"], 
});
console.log(pool)

// Application setup
const app = express();
const PORT = process.env.PORT || 8080;

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