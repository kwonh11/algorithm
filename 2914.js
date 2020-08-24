// 8진수 2진수

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
    const [a ,b] = line.split(' ');
    console.log(a*b-a+1);
})
.on('close', function () {
    process.exit();
});
