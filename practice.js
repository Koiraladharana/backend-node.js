const http = require("node:http");
const fs = require("node:fs");

fs.writeFileSync("practice.txt","This is practice page.");

const fileRead = fs.readFileSync("practice.txt","utf-8");
console.log(fileRead);

const serv = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.writeHead(200, {"content-type" : "text/plain"});
        res.end("This is home page");
    }
     else if(req.url === "/practice"){
        res.writeHead(200, {"content-type" : "text/plain"});
        res.end("This is practice page");
    }
     else if(req.url === "/about"){
        res.writeHead(200, {"content-type" : "text/plain"});
        res.end("This is about page");
    }
    else{
        res.end("404 Page Not Found");
    }
});

serv.listen(3000, "127.0.0.1", ()=>{
    console.log("server is listening");
})



const http = require("node:http");
const fs = require("node:fs");

fs.writeFileSync("index.txt", "This is index.txt file.");

const writtenInThisFile = fs.readFileSync("index.txt", "utf-8");
const hiHtml = fs.readFileSync("index.html", "utf-8");

console.log(writtenInThisFile);

const server = http.createServer((req, res) => {
  console.log("this is request url", req.url);
  console.log("Whatis the method", req.method);
  if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("this is about page");
  } else {
    res.writeHead(200, { "context-type": "text/html" });
    res.end(hiHtml.replace("{{%PAGENAME%}}", "Home"));
  }
});

server.listen(1000, "127.0.0.1", () => {
  console.log("Server is listening!");
});

