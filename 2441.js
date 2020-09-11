const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
    const count = Number(line);
    const array = new Array(count).fill("*".repeat(count));
    array.forEach((line,idx)=>{
        let stars = line.split('');
        for(let a = 0; a < idx; a++) {
            stars[a] = " ";
        }
        console.log(stars.join(""));
    })
    rl.close();
})
.on('close', function () {
    process.exit();
});
