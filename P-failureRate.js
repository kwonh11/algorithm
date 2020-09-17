// kakao 실패율

function solution(N, stages) {
    let divisors = Array(N+1).fill(0);
    stages.forEach((stage)=>{
        for (let i = 0; i < stage; i++) {divisors[i] += 1}
    })
    const Rate = divisors.reduce((arr,divisor,index)=>{
        return [...arr, divisor === 0? 0 :stages.filter(stage => stage===index+1).length/divisor]
    },[]);
    const result = Rate.reduce((arr,rate,index)=>[...arr ,[index+1 , rate]],[]);
    result.pop();
    result.sort((a,b)=> {
        if(a[1]===b[1]) return a[0]-b[0];
        return b[1]-a[1];
    })
    return result.map(v => v[0]);
}
console.log(solution(5,[2,1,2,6,2,4,3,3]));