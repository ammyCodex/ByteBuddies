module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Chat user connected');

    socket.on('sendMessage', (message) => {
      // Broadcast chat messages to all clients
      io.emit('messageReceived', message);
    });

    socket.on('disconnect', () => {
      console.log('Chat user disconnected');
    });
  });
};
