// 크레인게임

const board = [
                [0,0,0,0,0],
                [0,0,1,0,3],
                [0,2,5,0,1],
                [4,2,4,4,2],
                [3,5,1,3,1]
            ];
const moves = [1,5,3,5,1,2,1,4];
function solution (board, moves) {
    const basket = [];
    let result = 0;
    moves.forEach((move,i)=>{
        const foundLine = board.find(line=> line[move-1] > 0);
        if (foundLine)  {
            basket.push(foundLine[move-1]);
            foundLine[move-1] = 0;
        }
        const index = basket.findIndex((v,i)=> v=== basket[i+1]);
        if (index > -1) {
            basket.splice(index,1);
            basket.splice(index,1);
            result++;
        }
    })
    return result*2;
}
console.log(solution(board,moves));