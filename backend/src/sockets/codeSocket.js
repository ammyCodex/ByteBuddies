module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Code editor user connected');

    socket.on('editCode', (data) => {
      // Handle real-time code editing
      socket.broadcast.emit('codeUpdated', data);
    });

    socket.on('disconnect', () => {
      console.log('Code editor user disconnected');
    });
  });
};
