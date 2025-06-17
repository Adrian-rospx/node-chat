import fs from "node:fs/promises";

// promise .then()
fs.readFile("Text.txt", "utf-8")
    .then((data) => console.log(data + " promise"))
    .catch((err) => console.log(err));

console.log("Hello");

// async await
const readTheFile = async () => {
    try {
        const data = await fs.readFile("Text.txt", "utf-8");
        console.log(data + " async");
    } catch (error) {
        console.log(error);
    }
}

// writing to a file
const writeFile = async () => {
    try {
        await fs.writeFile("textw.txt", "Writing to this file for testing");
        console.log("FIle written to");
    } catch (error) {
        console.log(error);
    }
}

readTheFile();
writeFile();