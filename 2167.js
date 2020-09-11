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
rl.on('line', function (line) {
    input.push(line.split(' ').map(v=>Number(v)));
    [N, M] = input[0];
    K = Number(input[N+1]);
    if(input.length > N + K + 1) {
        const results = [];
        array = input.slice(1, N+1);
        parts = input.slice(N+2);
        parts.forEach(part => {
            const [i,j,x,y] = part.map(v => v-1);
            let result = 0;
            array.forEach((arr,a)=>{
                arr.forEach((number,b)=>{
                    if(a>=i && a<=x && b>=j && b<=y) {
                        result += number;
                    }
                })
            })
            results.push(result);
        })
        results.forEach(result => console.log(result));
        rl.close();
    }
})
.on('close', function () {
    process.exit();
}); 
