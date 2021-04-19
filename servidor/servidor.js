const net = require('net');//requerimos el modulo net 
//const math = require(' ./math.js');
const servidor = net.createServer();//creamos el servidor
servidor.on('connection', (socket)=>{
    console.log("CLIENTE CONECTADO")
    socket.on('data',(data)=>{
        console.log("MSJ "+ data);
        var result= 2021- parseInt(data);
        socket.write(result.toString());
        //socket.write("datos recibidos");
    })
    socket.on('close',()=>{
        console.log('cliente desconectado');
    });
    socket.on('error',(err)=>{
        console.log(err.message);
    });
})
servidor.listen(4040,()=>{//hacemos que escuche el servidor
    console.log('servidor escuchando');
})
