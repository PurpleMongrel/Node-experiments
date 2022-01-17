const {request} = require("http");

request(
  "http://localhost:8000/home/thais/code/JavaScript/Eloquent_JavaScript/Chapter_20-Node/reverse.js",
  {
  hostname: "localhost",
  port: 8000,
  method: "PUT",
}, (response) => console.log(response)).end("fuck off")