/* const {readFileSync} = require('fs');

mainBody.style.background = readFileSync("backgroundColor.txt");

let buffColor = readFileSync("background-color.txt")
console.log(buffColor.toString()) */

function fun() {
  let outputBox = document.getElementById("outputBox");
  let requestButton = document.getElementById("requestButton");
  let inputBox = document.getElementById("inputBox");


  outputBox.innerText = "test"
  outputBox.style.fontSize = "100px";

  function submitFun() {
    outputBox.innerText = inputBox.value;
  }



  requestButton.addEventListener('click', submitFun)

}