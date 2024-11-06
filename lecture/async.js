const fs = require("fs");

fs.readFile("./read.text", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("first", data.toString());
});

fs.readFile("./read.text", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("second", data.toString());
});

fs.readFile("./read.text", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("thrid", data.toString());
});

fs.readFile("./read.text", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("forth", data.toString());
});
