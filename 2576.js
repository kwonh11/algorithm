const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', function (line) {
    input.push(Number(line)%2 === 1? Number(line) : '');
    if (input.length > 6) {
        const numbers = input.filter(n=>n);
        if (numbers.length === 0) {
            console.log(-1);
            rl.close();
        }
        const accum = numbers.reduce((ac,cr) => ac+cr ,0);
        console.log(accum);
        console.log(Math.min(...numbers));
        rl.close();
    }
})
.on('close', function () {
    process.exit();
});
