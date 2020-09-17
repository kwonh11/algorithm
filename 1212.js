// 8진수 2진수

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const digits = line.split("");
  const result = digits.map((digit,i) => {
      const bin = parseInt(digit,8).toString(2);
      if (i === 0) return bin;
      const repeats = 3 - bin.length;
      return "0".repeat(repeats) + bin;
  }).join("");
  console.log(result);
  rl.close();
})
.on('close', function () {
    process.exit();
});
