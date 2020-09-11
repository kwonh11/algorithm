const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
    const [N,M] = line.split(' ');
    console.log(Math.abs(N-M));
    rl.close();
})
.on('close', function () {
    process.exit();
}); 