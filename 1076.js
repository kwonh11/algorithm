const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
const scheme = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
rl.on('line', function (line) {
    input.push(line);
    if(input.length > 2) {
        const first = scheme.indexOf(input[0]);
        const second = scheme.indexOf(input[1])
        const third = Math.pow(10, scheme.indexOf(input[2]));   // 세번 째 곱할 수 는 10의 n제곱
        const result = ( Number(first+''+second) )*third;
        console.log(result);
        rl.close();
    }
})
.on('close', function () {
    process.exit();
}); 
