const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    input.push(line);
    const count = Number(input[0]);
    const arr = Array(count).fill("*").map((star,index) => {
        const stars = star.repeat((count - index - 1 ) * 2 + 1 );
        const blank = " ".repeat(index);
        return blank + stars;
    });
    arr.forEach(line => console.log(line));
    rl.close();
})
.on('close', function () {
    process.exit();
}); 