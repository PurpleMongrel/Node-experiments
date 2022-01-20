const {request} = require("http");

request(
  "http://localhost:8000/home/thais/code/JavaScript/Eloquent_JavaScript/Chapter_20-Node/yelloooo",
  {
  hostname: "localhost",
  port: 8000,
  method: "MKCOL",
}).end()