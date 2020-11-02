const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
    const arr = Array(Number(line)).map((v,i)=>i+1);
    while(arr.length>1) {
        arr.shift();
        arr.push(arr.shift());
    }
    console.log(arr[0]);
    rl.close();
});
rl.on('close', function () {
    process.exit();
}); 