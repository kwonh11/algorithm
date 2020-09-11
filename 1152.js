const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
    const sentence = line.split(' ').filter(v => v);
    console.log(sentence.length);
})
.on('close', function () {
    process.exit();
}); 
