import fs from "fs/promises";

const buffer = await fs.readFile("hello-world.js");

console.info(buffer.toString());

await fs.writeFile("temp.text", "Hello NodeJS");