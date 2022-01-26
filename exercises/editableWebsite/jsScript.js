const {readFileSync} = require('fs');

/* let mainBody = document.getElementById("mainBody");
mainBody.style.background = readFileSync("backgroundColor.txt"); */

let buffColor = readFileSync("background-color.txt")
console.log(buffColor.toString())