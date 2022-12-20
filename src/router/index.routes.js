const router = require('express').Router();

// controladores
const { inicio_de_sesion_whatsapp } = require('../controllers/index.controller');

// vista de incio de sesion
router.get('/inicio-de-sesion_whatsapp-1', inicio_de_sesion_whatsapp);

// vista de incio de sesion
router.get('/inicio-de-sesion_whatsapp-2', (req, res) => {
    res.render('index/inicio_de_sesion_whatsapp.ejs')
});

// vista de incio de sesion
router.get('/', (req, res) => {
    res.render('index/inicio.ejs')
});


/* 
const hora_actual = [];

hora_actual.push(moment().format('LT').slice(0,1), moment().format('LT').slice(2,5), moment().format('LT').slice(6,8));

    // Mensajes en hora no disponible
    if ( hora_actual[0] >= 6 && hora_actual[2] == 'PM' && hora_actual[0] >= '1:' || hora_actual[0] >= 7 && hora_actual[2] == 'AM' ){
        console.log('No disponible, fuera de horario')
    }

    // mensajes de dia
    if ( hora_actual[0] >= 8 && hora_actual[2] == 'AM' ){
        console.log('ES DE DIA')
    }

    // Mensajes de la tarde
    if ( hora_actual[0] >= 12 && hora_actual[2] == 'PM' || hora_actual[0] >= 1 && hora_actual[2] == 'PM' ){
        console.log('ES LA TARDE')
    }

console.log(hora_actual)
 */




module.exports = router ;