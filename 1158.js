const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
    const [N, K] = line;
    let arr = new Array(N).fill(0).map((v,i)=>i+1);
    let josephus = [];
    let rest = 0;
    while(arr.length > 0) {
        [...arr].forEach((v,i)=> {
            if((i+1-rest) % K === 0) {
                arr[i] = '';
                josephus.push(v);        
            }
        });
        rest = arr.length % K;
        arr = arr.map(v => v);
    }
    console.log(temp);
    rl.close();
})
.on('close', function () {
    process.exit();
}); 