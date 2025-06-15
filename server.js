import http from "node:http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {

    res.writeHead(200, {'content-type' : 'text/html'});

    res.end("<h1>Hello, node.js!</h1>");
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});