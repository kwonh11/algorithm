const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
    const input = line.split(' ');
    const result = input.reduce((ac,cr)=>{
        return ac + Math.pow(Number(cr),2);
    },0) % 10
    console.log(result);
})
  .on('close', function () {
  process.exit();
});
