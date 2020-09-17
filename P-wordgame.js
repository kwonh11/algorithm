// 2018 인턴 끝말잇기

const words = ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'];
const n = 3;
function solution (n, words) {
    let used = [];
    let wrongPoint = [];
    words.forEach((v,i)=>{
        if (i>0) {
            let before = [...words[i-1]][words[i-1].length-1];
            const isUsed = used.findIndex(a => a===v) > -1;
            if(isUsed || before !== [...v][0]) {
                wrongPoint.push(i);
            }
        }
        used.push(v);
    })
    if (wrongPoint.length === 0) return [0,0];
    const turn = wrongPoint[0];
    
    return [turn%n+1,Math.floor(turn/n)+1];
    
}
console.log(solution(n,words));