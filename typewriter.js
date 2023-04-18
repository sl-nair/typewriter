const { stdout } = require("process");

const sentence = "hello there from lighthouse labs";
let timer = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);

  timer += 50;
}
setTimeout(() => {
  process.stdout.write("\n");
}, timer)
