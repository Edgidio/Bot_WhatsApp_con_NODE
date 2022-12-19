const express = require('express');
const app = express();

// modulos node
const path = require('path');

// modulos npm
require('dotenv').config();


// configuraciones express
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.set('PORT', process.env.PORT);

// middlewares
app.use(express.json())
app.use(express.urlencoded( {extended:false} ) );

// rutas
/* app.use(require('./routes/auth.routes')); */

// Publico
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    return res.send('Error 404')
});

module.exports = app;