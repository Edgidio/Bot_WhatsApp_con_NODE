const express = require('express');
const app = express();

// modulos npm
const { Client, LocalAuth } = require('whatsapp-web.js');
const qr_code_terminal = require('qrcode-terminal');
require('dotenv').config();
const qrcode = require('qrcode');
const moment = require('moment');

// modulos node
const fs = require('fs');

console.log(moment().format('LT'))

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

    if (msg.from == '584165111568@c.us') {
        msg.reply('Sisa perri… En este momento mi creador está durmiendo, se acostó muy tarde programándome, tuvo muchos    problemas para conectar conmigo, pero al final lo logro. Me presento, mi nombre es:"BOT_008", por el momento solo estoy programado para responder a tus mensajes, pero con el paso de los días implementaremos una IA para hacer esta conversación más interactiva y dinámica, capaz de responder mensajes más concreto.');
    }
    if (msg.from == '584120936057@c.us') {
        msg.reply('Sisa perri… En este momento mi creador está durmiendo, se acostó muy tarde programándome, tuvo muchos problemas para conectar conmigo, pero al final lo logro. Me presento, mi nombre es:"BOT_008", por el momento solo estoy programado para responder a tus mensajes, pero con el paso de los días implementaremos una IA para hacer esta conversación más interactiva y dinámica, capaz de responder mensajes más concreto.');
    }

});
    
client.initialize();


app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${process.env.PORT}/iniciar-sesion-whatsapp-web`)
})