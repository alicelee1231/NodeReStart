const fs = require("fs").promises;

fs.writeFile("./write.text", "글이 입력됩니다.")
  .then(() => {
    return fs.readFile("./write.text");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });
