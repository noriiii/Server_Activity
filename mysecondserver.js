var http = require ("http");

var PORT;
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
	if (PORT === PORT1) {
		response.end(" something good  " + request.url);
	} else if (PORT === PORT2) {
		response.end(" something bad " + request.url);
	}
	
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("string", PORT);
})