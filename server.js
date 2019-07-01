'use strict';

const PORT = process.env.PORT;

const io = require('socket.io')(PORT);

io.on('connection', socket => {

  console.log('Connected', socket.id);

  socket.on('chat', (payload) => {
    console.log('broadcast', payload);
    io.emit('incoming', payload);
  });

});


console.log('Connected: ', PORT);

