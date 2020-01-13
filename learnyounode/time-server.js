const net=require('net');
const date=new Date();

const server=net.createServer(function (socket){
        
    socket.end(`\n`);
    
})
server.listen(12323);