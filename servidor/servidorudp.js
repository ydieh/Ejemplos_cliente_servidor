const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message',(msg,info)=>{
  console.log("mesaje recibido del cliente "+ msg);
  console.log("info del msj"+ info.port, info.address);
  var msj= "hola cliente";
  server.send(msj,info.port,'localhost', (err)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("datos enviados");
        }
  });
});
server.on('listening',()=>{
    console.log("servidor escuchando");
}
)
server.bind(4041);
