const { statSync, readFileSync, readdirSync } = require('fs');

let results = [];
let re = new RegExp(process.argv[2]);

function search(file) {
  let stats = statSync(file);
  if (stats.isDirectory()) {
    for (let f of readdirSync(file)) {
      search(file + "/" + f );
    }
  } else {
    if (re.test(readFileSync(file))) {
      results.push(file);
    }
  }
}

for (let file of process.argv.slice(3)) {
  search(file);
}

console.log(results);
