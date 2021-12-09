const { createServer } = require("http");
let server = createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
  <h1>Hello!</h1>
  <p>You asked for <code>${request.body}</code></p>`);
  response.write(`yolo`)
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");
