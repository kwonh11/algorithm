const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
    if (input.length >= 2) rl.close();
})
.on('close', function () {
    const peoples = input[0].split(' ').reduce((ac,cr)=> ac*cr , 1);
    const result = input[1].split(' ').reduce((ac,cr)=>{
        return [...ac, cr - peoples];
    },[]);
    console.log(result.join(' '));
    process.exit();
});
