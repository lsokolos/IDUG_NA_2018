var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.write('Inside createServer block \r\n');
		res.write('Larry Sokoloski was here \r\n')
		res.end('Hello World and welcome to the Malta!')
}).listen(9090);