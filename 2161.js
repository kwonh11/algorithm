const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
    const arr = Array(Number(line)).fill(0).map((v,i)=>i+1);
    const throws = [];
    while(arr.length>1) {
        throws.push(arr.shift());
        const bottom = arr.shift();
        arr.push(bottom);
    }
    throws.push(arr[0]);
    console.log(throws.join(' '));
    rl.close();
})
.on('close', function () {
    process.exit();
}); 