
const numbers = [2,1,3,4,1];
const results = [];
function solution(numbers) {
    const arr = numbers.reduce((ac, cr, i) => {
        const len = numbers.length;
        const sums = [];
        for (let a = 1; a < len - i; a++) {
            sums.push(cr + numbers[i+a]);
        }
        return [...ac, ...sums];
    }, []);
    const res = Array.from(new Set(arr));
    return res;
}

console.log(solution(numbers));