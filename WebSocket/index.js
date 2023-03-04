const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: true,
    credentials: true,
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  console.log('Usuario conectado');

  socket.on('enviarMensaje', (infoMensaje) => {
    console.log("Mensaje recibido: ", infoMensaje);
    // Cambiamos el tipo del mensaje a remoto
    infoMensaje.tipoMensaje = 2;
    // Emitimos el mensaje a todos los clientes excepto al que lo envió
    socket.broadcast.emit('recibirMensaje', infoMensaje);
    });
});

http.listen(3000, () => {
  console.log('Escuchando puerto 3000');
});