var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.write('Inside createServer block \n');
		res.write('Larry Sokoloski was here \n')
		res.end('Hello World and welcome to the 2018 EMEA IDUG conference in Malta')
}).listen(9090);
