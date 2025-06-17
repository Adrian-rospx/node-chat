import { createServer } from 'node:http';

const PORT = process.env.PORT;

const users = [
    {id : 1, name : "Hudson"},
    {id : 2, name : "York"},
    {id : 3, name : "London"}
]

const server = createServer((req, res) => {
    if(req.url === "/api/users" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(users));
        res.end();
    } else {
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ message : "Route not found"}));
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})