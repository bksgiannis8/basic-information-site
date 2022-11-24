const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {
    //if the link clicked is index or is the first time in the page load index.html
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    }).listen(8080);
}).listen(8080)