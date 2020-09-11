const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    input.push(line);
    if (input.length >= 5) {
        const [L,A,B,C,D] = input;
        let days = 1;
        while (A/C > days || B/D > days) {
            days++;
        }
        console.log(L - days);
        rl.close();
    }
})
.on('close', function () {
    process.exit();
}); 