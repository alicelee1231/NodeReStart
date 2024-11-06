const fs = require("fs");

let data = fs.readFileSync("./read.text");
console.log("first", data.toString());

data = fs.readFileSync("./read.text");
console.log("second", data.toString());

data = fs.readFileSync("./read.text");
console.log("thrid", data.toString());

data = fs.readFileSync("./read.text");
console.log("fourth", data.toString());
