const { Client, LocalAuth } = require('whatsapp-web.js');
const qr_code_terminal = require('qrcode-terminal');
const fs = require('fs');

console.log('Iniciando la aplicación...')

// Iniciar la sesión de WhatsApp web
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
		args: ['--no-sandbox'],
	}
});
     
client.on('qr', (qr) => {

    console.log('No tienes una sesión activa en WhatsApp web')
    qr_code_terminal.generate(qr, {small: true})

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
