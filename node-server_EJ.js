const { createServer } = require("http");

const methods = Object.create(null);


createServer((request, response) => {
  let handler = methods[request.method] || notAllowed;
  handler(request)
    .catch(error => {
      if (error.status != null) return error;
      return { body: String(error), status: 500 };
    })
    .then(({ body, status = 200, type = "text/plain" }) => {
      response.writeHead(status, { "Content-Type": type });
      if (body && body.pipe) {
        body.pipe(response);
      } else response.end(body);
    });
}).listen(8000);

async function notAllowed(request) {
  return {
    status: 405,
    body: `Method ${request.method} not allowed.`
  };
}

var { parse } = require("url");
var { resolve, sep } = require("path");

var baseDirectory = process.cwd();

function urlPath(url) {

  let { pathname } = parse(url);
 
  let path = resolve(decodeURIComponent(pathname).slice(1));
  if (path != baseDirectory &&
    !path.startsWith(baseDirectory + sep)) {
    throw { status: 403, body: "Forbidden" };
  }
  return url;
}

const { createReadStream } = require("fs");
const { stat, readdir } = require("fs").promises;
const mime = require("mime");

methods.GET = async function (request) {

  //let path = urlPath(request.url);
  //let path = urlPath(request.url) + __dirname;
  let path = request.url
  let stats;
  /* console.log("__dirname:");
  console.log(__dirname);
  console.log("\nrequest.url:");
  console.log(request.url);
  console.log("\npath:");
  console.log(path);
  console.log("\nurlPath(request.url):");
  console.log(urlPath(request.url))
  console.log("********************") */
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    else return { status: 404, body: "File not found" };
  }
  if (stats.isDirectory()) {
    return { body: (await readdir(path)).join("\n") };
  } else {
    return {
      body: createReadStream(path),
      type: mime.getType(path)
    };
  }
};

const { rmdir, unlink } = require("fs").promises;

methods.DELETE = async function (request) {
  let path = request.url;
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    else return { status: 204 };
    console.log("yo")
  }
  if (stats.isDirectory()) await rmdir(path);
  else await unlink(path);
  return { status: 204 };
};

const { createWriteStream } = require("fs");

function pipeStream(from, to) {
  return new Promise((resolve, reject) => {
    from.on("error", reject);
    to.on("error", reject);
    to.on("finish", resolve);
    from.pipe(to);
  });
}

methods.PUT = async function (request) {
  let path = request.url;
  await pipeStream(request, createWriteStream(path));
  return { status: 204 };
};

const { mkdir } = require("fs").promises;

methods.MKCOL = async function (request) {
console.log(5)
  let path = request.url;
  let stats;
    try {
      stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    await mkdir(path);
    return {status: 204}
  }
  if (stats.isDirectory()) return {status: 204};
  else return {status: 400, body: "file not a directory"}

}

/* const {mkdir} = require("fs").promises;

methods.MKCOL = async function(request) {
  let path = request.url;
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    await mkdir(path);
    return {status: 204};
  }
  if (stats.isDirectory()) return {status: 204};
  else return {status: 400, body: "Not a directory"};
};
 */
console.log("listening")

