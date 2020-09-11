const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    input.push(line);
    if (input.length > Number(input[0])) {
        const results = input.slice(1).map(line => {
            const [a,b] = line.split(' ');
            const num = Math.pow(a, b%4+4).toString();
            return num[num.length-1];
        })
        results.forEach(v => {
            if (v <= 0) {
                console.log(10);
            } else {
                console.log(v)
            }
        });
        rl.close();
    }
})
.on('close', function () {
    process.exit();
}); 
