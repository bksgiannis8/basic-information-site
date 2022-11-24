const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {
    //if the link clicked is index or is the first time in the page load index.html
    if (req.url==='/') {
        fs.readFile('index.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    }
    else if (req.url==='/contact-me') {
        fs.readFile('contact-me.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    }
}).listen(8080);