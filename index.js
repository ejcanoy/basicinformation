const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    let fileName;
    if (req.url === '/about') {
        fileName = './about.html';
    } else if (req.url === '/contact-me') {
        fileName = './contact-me.html';
    } else if (req.url === '') {
        fileName = './index.html';
    } else {
        fileName = './404.html';
    }
    
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(8080);