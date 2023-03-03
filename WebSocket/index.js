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

  socket.on('test', () => {
    console.log("Evento test recibido");
    socket.emit('test2');
  });
});

app.get('/', (req, res) => {
  res.send('<h1>Hola mundo</h1>');
});

http.listen(3000, () => {
  console.log('Escuchando puerto 3000');
});