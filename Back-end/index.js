const express = require('express');

const config = require('config-yml');
console.log(config.app.url);
console.log(config.app.cache);
console.log(config.db.location);

const app = express();
const PORT = process.env.PORT || 8080;

app.listener(PORT, console.log(`Listening on port: ${PORT}`));