'use strict'

const express = require('express');
require('dotenv').config();

const app = express();


app.use(express.json());

const project_routes = require('./routes/projectR');

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

var port = 3000;

app.listen(port, () => {
    console.log("Servidor corriendo correctamente en la Url: localhost:3000");
});

//RUTAS
app.use('/api',project_routes);


//Exportar 
module.exports = app;
