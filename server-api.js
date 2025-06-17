import { createServer } from 'node:http';

const PORT = process.env.PORT;

// hardcoded data
const users = [
    {id : 1, name : "Hudson"},
    {id : 2, name : "York"},
    {id : 3, name : "London"}
]

// basic web api for user information
const server = createServer((req, res) => {
    if(req.url === "/api/users" && req.method === "GET") {
        // return data for all users
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
        const id = req.url.split("/")[3];
        const user = users.find((user) => user.id === parseInt(id));
        
        // display user data at id
        if (user) {
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(user));
            res.end();
        } else {
            // error for non existing user at ids
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({message : `User ${id} not found`}));
            res.end();
        }
    } else {
        // error for invalid requests
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 404;
        res.write(JSON.stringify({ message : "Route not found"}));
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})