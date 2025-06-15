import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.write("Hello, NodeJS");
    res.end()
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});