import http from "node:http";
import fs from "node:fs/promises";
import url from "node:url";
import path from "node:path";

const PORT = process.env.PORT;

// get file and directory paths
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// create the server
const server = http.createServer(async (req, res) => {
    // basic client server setup
    try {
        // only accept GET requests
        if(req.method === "GET") {

            let filePath;
            // simple routing
            if(req.url === "/") {
                filePath = path.join(__dirname, "public", "index.html");
            } else if(req.url === "/about") {
                filePath = path.join(__dirname, "public", "about.html");
            } else {
                throw new Error('Page not found');
            }

            // send files to client
            const data = await fs.readFile(filePath);
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end();

        } else {
            throw new Error(`Method ${req.method} not allowed`);
        }
    } catch (error) {
        res.writeHead(500, {"Content-Type" : "text/plain"});
        res.end(`Server error: ${error}`);
    }
})

// activate the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});