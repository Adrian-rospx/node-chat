import http from "node:http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // basic client server setup
    if(req.url === '/') {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.end("<h1> Welcome to the Homepage </h1>");
    } else if(req.url === '/about') {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.end("<h1>This page was written by Adrian</h1>");
    } else {
        res.writeHead(404, {'content-type' : 'text/html'});
        res.end("<h1>This address is not available</h1>");
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});