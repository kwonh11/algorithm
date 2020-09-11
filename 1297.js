const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
    const [diagonal, heightR, widthR] = line.split(' ');
    const rate = diagonal / Math.sqrt(Math.pow(heightR , 2) + Math.pow(widthR, 2));
    const width = widthR * rate;
    const height = heightR * rate;
    console.log(Math.floor(height), Math.floor(width));
    rl.close();
})
.on('close', function () {
    process.exit();
}); 