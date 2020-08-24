const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
    console.log(parseInt(line, 16));
})
.on('close', function () {
    process.exit();
});
