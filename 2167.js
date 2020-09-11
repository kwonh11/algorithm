const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
let arr = [];
let N, M;   // N행 M열
let K;      // parts 배열의 크기
let parts = [];
const toNumber = (v) => Number(v);
rl.on('line', function (line) {
    input.push(line.split(' ').map(toNumber));
    [N, M] = input[0];
    K = Number(input[N+1]);
    if(input.length > N + K + 1) {
        const results = [];
        arr = input.slice(1, N+1);
        parts = input.slice(N+2);

        
        rl.close();
    }
})
.on('close', function () {
    process.exit();
}); 
