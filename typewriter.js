const sentence = "hello there from lighthouse labs";
// const sentence = "hello";

let speed = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, speed);
  speed += 50;
}
