const buffer = Buffer.from("Nito Aldif", "utf8");

console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("Tml0byBBbGRpZg==", "base64");
console.info(bufferBase64.toString("utf8"));