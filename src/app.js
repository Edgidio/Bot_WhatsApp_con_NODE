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

// Variables globales
app.use( (req, res, next) => {

    let bot_session ;

    next();

});

// rutas
app.get('/inicio-de-sesion_whatsapp', (req, res) => {
    res.render('index/inicio_de_sesion_whatsapp.ejs')
});

app.get('/', (req, res) => {
    res.render('index/inicio.ejs')
});

// Publico
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    return res.send('Error 404')
});

module.exports = app;