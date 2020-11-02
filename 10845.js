const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
let queue = [];
rl.on('line', function (line) {
    input.push(line);
    if (input.length >= Number(input[0])+1) {
        input.forEach((line, i)=> {
            if(i > 0) {
                const [order, number] = line.split(' ');
                if(order === "push") queue.push(number);
                if(order === "pop") console.log(queue.length === 0 ? -1 : queue.shift());
                if(order === "size") console.log(queue.length);
                if(order === "empty") console.log(queue.length === 0 ? 1 : 0);
                if(order === "front") console.log(queue[0]? queue[0]: -1);
                if(order === "back") console.log(queue[queue.length-1]? queue[queue.length-1]: -1);
            }
        });
    }
})
.on('close', function () {
    process.exit();
});
