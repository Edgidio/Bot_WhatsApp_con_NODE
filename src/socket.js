exports.socket = (io) => {

    io.on('connection', (socket) => {

        exports.emit_qr = (codigo_qr) => {
            io.emit('qr', codigo_qr);
        }

        exports.redirect_inicio = (bolean) => {
            io.emit('session_iniciada', bolean);
        }

        
    });

}