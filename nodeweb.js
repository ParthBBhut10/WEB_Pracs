// Create NodeJs Web Server for HTML or in Text Format
var http = require('http');
var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.write('<html><body><p>Jay Swaminarayan, My name is Parth B Bhut<p></body></html');
        res.end();
    }
});
server.listen(5000);
console.log('NodeJs web server at 5000')
