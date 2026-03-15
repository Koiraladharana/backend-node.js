import http from "http";
import {homeHandler} from "./controller.js";
import  readline  from "readline";
import dotenv from "dotenv";
import fs from "fs";

const env = dotenv.config();
console.log(env)
const readCLIinput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

readCLIinput.question("What is your Name?\n", (name)=>{
  console.log("Oh! Hi", name);
})
console.log("this is dir", __dirname);

fs.writeFileSync("practice.txt","This is practice page.");

const fileRead = fs.readFileSync("practice.txt","utf-8");
console.log(fileRead);

const htmlPage = fs.readFileSync("./template/index.html", "utf-8");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        homeHandler(req, res, htmlPage);
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
        res.statusCode = 404;
        res.end("page not found")
    }
});

server.listen(3000, "127.0.0.1", ()=>{
    console.log("server is listening");
})