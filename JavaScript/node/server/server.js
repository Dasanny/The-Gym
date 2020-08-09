const http = require('http');

// takes in request + response objects
const server = http.createServer((req, res) => {
    console.log('request made');
});

// port, hostname (localhost is default)
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})