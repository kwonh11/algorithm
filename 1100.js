const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    let result = 0;
    input.push(line);
    if(input.length > 7) {
        // 각 줄을 순회함 8회
        input.forEach((line, index)=>{
            const arr = line.split('');
            arr.forEach((span, i) => {
                // 각 줄의 한 칸씩 순회함 8X8회
                // 홀수 번째 줄이며, 홀 수 번째 칸 [흰칸] 에 말이 놓여있음
                if(span === "F" && index % 2 === 0 && i % 2 === 0) {
                    result++;
                }
                // 짝수 번째 줄이며, 짝 수 번째 칸 [흰칸] 에 말이 놓여있음
                if(span === "F" && index % 2 === 1 && i % 2 === 1) {
                    result++;
                }
            })
        })
        console.log(result);
    }
})
.on('close', function () {
    process.exit();
}); 
