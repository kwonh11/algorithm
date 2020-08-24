const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
    const criteria = [1, 1, 2, 2, 2, 8];
    const result = line.split(' ').map((v,i)=> criteria[i] - v);
    console.log(result.join(' '));
})
.on('close', function () {
    process.exit();
});
