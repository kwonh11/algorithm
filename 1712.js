const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calc(A,B,C) {
    const [a,b,c] = [Number(A), Number(B), Number(C)];
    const incoming = c-b;
    if (incoming <= 0) return -1;

    let count = 1;
    while (a/(c-b) >= count) {
        count++;
    }
    return count;
}
rl.on('line', function (line) {
    const [A, B, C] = line.split(' ');
    console.log(calc(A,B,C));
    rl.close();
})
.on('close', function () {
    process.exit();
}); 