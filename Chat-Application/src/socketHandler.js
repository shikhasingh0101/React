
export function setupSocket(io) {
    io.on('connection', (socket) => {
      console.log('A user connected:', socket.id);
  
      socket.on('message', (msg) => {
        console.log('Message:', msg);
        io.emit('message', msg); 
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
    });
  }
  