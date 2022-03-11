import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Nito\n");
writer.write("Aldi\n");
writer.write("Fitrian\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});