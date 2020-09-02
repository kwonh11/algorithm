const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getPrimes (k) {
    const arr = new Array(k).fill(true);
    const k_primes = [...arr].map((v,i) => {
        if (i <= 1) return false;
        if (arr[i]) {
            for(let a = i*2; a < k; a += i) {
                arr[a] = false;
            }
            return true;
        }
    }).map((v,i)=>v? i: '').filter(v=>v);
    return k_primes;
};
rl.on('line', function (line) {
    const [p, k] = line.split(' ');
    const primes = getPrimes(Number(k));
    let result = "GOOD";
    let badNumber = [];
    primes.map((prime) => {
        if (p % prime === 0) {
            result = `BAD`;
            badNumber.push(prime);
        }
    })
    if (result === "GOOD") {
        console.log(result);
    } else {
        console.log("BAD", badNumber[0]);
    }
    rl.close();
})
.on('close', function () {
    process.exit();
}); 