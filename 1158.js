const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
    const [N, K] = line.split(' ').map(v => Number(v));
    let arr = new Array(N).fill(0).map((v,i)=>i+1);
    let josepus = [];
    let count = 0;
    while(arr.length > 0) {
        count++;
        let temp = arr.shift();
        if (count === K) {
            josepus.push(temp);
            count = 0;
        } else {
            arr.push(temp);
        }
    }
    let result = '';
    josepus.forEach((v,i)=>{
        if(i === 0) {
            result += `<${v}, `
        }else if(i === josepus.length-1) {
            result += `${v}>`
        }else {
            result += `${v}, `
        }
    })
    console.log(result);
    rl.close();
})
.on('close', function () {
    process.exit();
}); 