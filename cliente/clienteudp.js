const dgram = require('dgram');
const client = dgram.createSocket('udp4');
var buffer = require('buffer');
const datos = Buffer.from('hello world');
client.on('data',function(data,info){
    console.log('mesj recibidos: '+ data);
    console.log("info del msj"+ info.port, info.address);
})
client.send(datos,4041,'localhost',function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log("datos enviados al servidor");
    }
})
