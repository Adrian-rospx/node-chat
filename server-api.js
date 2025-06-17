import { createServer } from 'node:http';

const PORT = process.env.PORT;

// hardcoded data
const users = [
    {id : 1, name : "Hudson"},
    {id : 2, name : "York"},
    {id : 3, name : "London"}
]

// logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
}

// route handler for GET requests
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
        res.write(JSON.stringify(user));
    } else {
        // error for non existing user at ids\
        res.statusCode = 404;
        res.write(JSON.stringify({message : `User ${id} not found`}));
    }
    res.end();
}

// not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message : "Route not found"}));
    res.end();
}

// basic web api for user information
const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if(req.url === "/api/users" && req.method === "GET") {
                getUsersHandler(req, res);
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
                getUserByIdHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        })
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})