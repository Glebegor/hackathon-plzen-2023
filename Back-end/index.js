const express = require('express');

// Configs
const config = require('config-yml').load('config/configs.yml')
console.log(config)

// Application setup
const app = express();
const PORT = process.env.PORT || 8080;

// Handlers
const authRoute = "/auth/";
const homeController = require('./controllers/LoginController');
app.use(authRoute + "login", homeController);

const homeController = require('./controllers/RegisterController');
app.use(authRoute + "register", homeController);

const homeController = require('./controllers/VerifyController');
app.use(authRoute + "verify", homeController);



app.listen(PORT, console.log(`Listening on port: ${PORT}`));