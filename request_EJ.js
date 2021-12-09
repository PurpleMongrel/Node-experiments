const {request} = require("http");

request({
  hostname: "localhost",
  port: 8000,
  method: "POST"
}, response => {
  response.on("data", chunk =>
    process.stdout.write(`\n${chunk.toString()}\n\n`));
}).end("Hello server")