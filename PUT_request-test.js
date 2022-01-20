const { request } = require("http");
let b;
let r = request(
  "http://localhost:8000/home/thais/code/JavaScript/Eloquent_JavaScript/Chapter_20-Node/reverse.js",
  {
    hostname: "localhost",
    port: 8000,
    method: "PUT",
  })
  let arr = [];
for (let prop in r) {
  arr.push(prop);
  arr.push(typeof r[prop]);
  arr.push("***")

}
console.log(r.write.toString())
r.write(JSON.stringify(arr))
r.end();

/* console.log("req:");
console.log(r);
console.log("*******************") */

