const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res)=>{
    var x= url.parse(req.url,true);
    var ruta ="."+x.pathname;
    console.log(ruta);
    fs.readFile(ruta,function(err,data){
        if(err){
            res.writeHead(404 ,{'Content-Type': 'text/plane'}); 
            return res.end('404 not found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write(data);
        return res.end();
    });
   

}).listen(4042,function(){
    console.log("servidor escuchando");

})