const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    input.push(line);
    if(input.length >= 2) {
        const [hour, minute, second] = input[0].split(' ');
        const required = input[1];
        let date = new Date(2019,1,1);
        date.setHours(hour);
        date.setMinutes(minute);
        date.setSeconds(second);
        date.setSeconds(date.getSeconds() + Number(required));
        console.log(date.getHours(), date.getMinutes(), date.getSeconds());
        rl.close();
    }
})
.on('close', function () {
    process.exit();
}); 