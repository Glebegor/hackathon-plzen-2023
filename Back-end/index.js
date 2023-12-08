const express = require('express');

// Configs
const config = require('config-yml').load('config/configs.yml')
console.log(config)

// Application setup
const app = express();
const PORT = process.env.PORT || 8080;

// Handlers

const authRoutes = require('./src/routers/authRoutes');
app.use('/auth', authRoutes);

const apiRoutes = require('./src/routers/apiRoutes');
app.use('/api', apiRoutes);


// Run application
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});