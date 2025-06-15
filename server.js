import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {

    res.writeHead(500, {'content-type' : 'application/json'});

    res.end(JSON.stringify({ message : 'Server Error'}));
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});