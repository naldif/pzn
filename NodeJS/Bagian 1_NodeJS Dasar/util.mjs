import util from "util";

const firstName = "Nito";
const lastName = "Aldi";

console.info(`Hello ${firstName} ${lastName} `);
console.info(util.format("Hello %s %s", firstName, lastName));