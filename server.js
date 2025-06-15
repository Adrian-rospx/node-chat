import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;

    res.write("<h1>Hello, NodeJS<h1>");
    res.end()
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});