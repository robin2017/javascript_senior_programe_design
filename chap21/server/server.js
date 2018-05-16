var http = require('http');
var fs = require("fs");
http.createServer(function (request, response) {
    if (request.url == '/index.html') {
        fs.readFile("static/index.html", function (err, bytes) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(bytes);
            response.end();
        });
    } else if (request.url == '/ajaxTest.js') {
        fs.readFile("static/ajaxTest.js", function (err, bytes) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(bytes);
            response.end();
        });
    } else if (request.url == '/url_data') {
        console.log('reqHeader:', request.headers.reqheader);//reqValue
        response.writeHead(200, {
            'Content-Type': 'text/plain',
            'respHeader': 'respValue'
        });
        response.end('ajax response data\n');
    } else {
        response.end('error\n');
    }
}).listen(8888);
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
