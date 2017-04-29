var http = require('http');
var fs = require('fs');
var server = http.createServer();

var html = fs.readFileSync("./index.html");
function control(petic, resp) {
    resp.writeHead(200, {'content-type': 'text/html'});
    resp.write(html);
    //resp.render();
    //resp.write('Hola, Mundo !');
    resp.end();
}
server.on('request', control);
server.listen(8080);