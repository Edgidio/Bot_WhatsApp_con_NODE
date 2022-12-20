const app = require('./app')

// Socket IO
const { Server } = require("socket.io");
const http = require('http');
const { socket } = require('./socket');
const server = http.createServer(app);
const io = new Server(server);

module.exports = io ;
socket(io)

// correr el servidor
server.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo`)
})