const webSocket = require('ws');
const wss = new webSocket.Server({port:8087});
wss.on('connection', (ws) => {
console.log("Un nuevo usuario conectado!");
ws.on('message', (data) =>{
    console.log(`mensaje:${data}`);
    wss.clients.forEach((cliente)=>{
        if (cliente != ws && cliente.readyState === webSocket.OPEN){
            cliente.send(data);
        }
    });
});
ws.on('close',()=>{
    console.log('usuario desconectado');
});
});
console.log('server funcionando');