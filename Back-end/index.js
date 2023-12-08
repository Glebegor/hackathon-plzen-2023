const express = require('express');

const config = require('config-yml').load('config/configs.yml')
console.log(config)
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Listening on port: ${PORT}`));