const {request} = require("http");
let b;
let r = request(
  "http://localhost:8000/home/thais/code/JavaScript/Eloquent_JavaScript/Chapter_20-Node/reverse.js",
  {
  hostname: "localhost",
  port: 8000,
  method: "PUT",
})
r.write(JSON.stringify(r, null, 2))
r.end();

/* console.log("req:");
console.log(r);
console.log("*******************") */

