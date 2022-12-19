const router = require('express').Router();

// modulos npm
const { Client, LocalAuth } = require('whatsapp-web.js');
const qr_code_terminal = require('qrcode-terminal');
require('dotenv').config();
const qrcode = require('qrcode');
const moment = require('moment');

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

console.log('Iniciando la aplicación...');

// Iniciar la sesión de WhatsApp web
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox'],
    }
});

client.on('qr', async (qr) => {

    console.log('No tienes una sesión activa en WhatsApp web')

    const QR = await qrcode.toDataURL(qr);

    app.get('/iniciar-sesion-whatsapp-web', async (req, res) => {    
        
        const htmlContent =  `
        <div style="display: flex; justify-content: center; align-items: center;">
            <img style="display: block; text-align: center;" src="${QR}">
        </div>
        `;
        
        res.send(htmlContent)
    
    });

});

client.on('ready', () => {
    console.log('Cliente conectado correctamente! Esperando mensajes...');
    console.log('Esperando mensajes...');
});
    
client.on('message', msg => {

/*     // Mensajes en hora no disponible
    if ( hora_actual[0] >= 6 && hora_actual[2] == 'PM' || hora_actual[0] >= 7 && hora_actual[2] == 'AM' ){
        console.log('No disponible')
    }

    // mensajes de dia
    if ( hora_actual[0] >= 8 && hora_actual[2] == 'AM' ){
        console.log('ES DE DIA')
    }

    // Mensajes de la tarde
    if ( hora_actual[0] >= 12 && hora_actual[2] == 'PM' || hora_actual[0] >= 1 && hora_actual[2] == 'PM' ){
        console.log('ES LA TARDE')
    } */

    if (msg.from == '584165111568@c.us') {
        msg.reply('Sisa perri… En este momento mi creador está durmiendo, se acostó muy tarde programándome, tuvo muchos    problemas para conectar conmigo, pero al final lo logro. Me presento, mi nombre es:"BOT_008", por el momento solo estoy programado para responder a tus mensajes, pero con el paso de los días implementaremos una IA para hacer esta conversación más interactiva y dinámica, capaz de responder mensajes más concreto.');
    }
    if (msg.from == '584120936057@c.us') {
        msg.reply('Sisa perri… En este momento mi creador está durmiendo, se acostó muy tarde programándome, tuvo muchos problemas para conectar conmigo, pero al final lo logro. Me presento, mi nombre es:"BOT_008", por el momento solo estoy programado para responder a tus mensajes, pero con el paso de los días implementaremos una IA para hacer esta conversación más interactiva y dinámica, capaz de responder mensajes más concreto.');
    }

});
    
client.initialize();

router.get('/iniciar-sesion-whatsapp', (req, res) => {

});


module.exports = router ;