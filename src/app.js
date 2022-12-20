const express = require('express');
const app = express();

// modulos node
const path = require('path');

// modulos npm
require('dotenv').config();
const flash = require('connect-flash');
const session = require('express-session');


// configuraciones express
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.set('PORT', process.env.PORT);

// middlewares
app.use(express.json())
app.use(express.urlencoded( {extended:false} ) );
app.use( session({
    secret: 'BOTnadamas',
    resave: true,
    saveUninitialized: true
}));
app.use(flash())

// Variables globales
app.use( (req, res, next) => {

    res.locals.qrr = req.flash('img_qr')

    next();

});

// rutas
app.use(require('./router/index.routes'))

// Publico
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    return res.send('Error 404')
});

module.exports = app;