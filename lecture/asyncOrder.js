const fs = require("fs").promises;

// 비동기의 문제점은 결과를 예측할 수 없다는것.
//  그러나 장점은 빠르다는것. 그래서 비동기식인데 순서를 고정시켜놓아야함.
async function main() {
  let data = await fs.readFile("./read.text");
  console.log("fisrt", data.toString());
  data = await fs.readFile("./read.text");
  console.log("second", data.toString());
  data = await fs.readFile("./read.text");
  console.log("third", data.toString());
  data = await fs.readFile("./read.text");
  console.log("fourth", data.toString());
}
main();
