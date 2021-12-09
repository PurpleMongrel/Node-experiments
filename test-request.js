const {request} = require("http");

request({
  hostname: "localhost",
  port: 8000,
  method: "DELETE",
  url: "/home/thais/code/JavaScript/Eloquent_JavaScript/Chapter_20-Node/dummy-deletable"
}, (response) => console.log(response)).end()