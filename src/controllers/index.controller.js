// modulos npm
const { Client, LocalAuth } = require('whatsapp-web.js');
const qr_code_terminal = require('qrcode-terminal');
const qrcode = require('qrcode');
const moment = require('moment');
const { router } = require('../app');

exports.inicio_de_sesion_whatsapp = async (req, res) => { 

    console.log('Cargando BOT-008...');

    // Guardar la sesión de WhatsApp web
    const client = new Client({
        authStrategy: new LocalAuth(),
        puppeteer: {
            args: ['--no-sandbox'],
        }
    });

    client.on('qr', async (qr) => {

        const img_qr = await qrcode.toDataURL(qr);

        console.log(img_qr);

        res.locals.qrr = img_qr

    });
    
    client.on('ready', () => {
        console.log('¡BOT-008 conectado correctamente!');
        console.log('BOT-008 Está esperando mensajes...');
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

    return res.render('index/inicio_de_sesion_whatsapp.ejs', {
        qr: 'true', 
        mensaje: 'Espere un momento que se genere el código QR',
    })

}