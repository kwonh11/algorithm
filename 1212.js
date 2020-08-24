// 8진수 2진수

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
    console.log(parseInt(line,8).toString(2));
})
.on('close', function () {
    process.exit();
});
