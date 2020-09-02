
function getPrime (k) {
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

function isValid (k, primes) {
    let result = "GOOD";
    const numberArr = k.split('');
    primes.forEach(prime=>{
        if (result === "GOOD") {
            const processed = numberArr.map(number => number % prime).reduce((ac,cr)=> ac+cr ,0);
            if (processed % prime === 0) {
                result = `BAD ${prime}`;
            }
        }
    })
    return result;
}

console.log(Math.pow(10,100));

