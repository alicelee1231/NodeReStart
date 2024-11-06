const fs = require("fs").promises;

fs.readFile("./read.text")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });
