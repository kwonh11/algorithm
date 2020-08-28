// 카카오 키패드 누르기

const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left";

function getDistance(number, handPosition) {
    const _number = number === 0? 11 : number;
    const centerline = [2,5,8,11];
    let result = 0;
    if (centerline.includes(handPosition)) {
        result =  Math.abs(_number - handPosition) / 3;
    } else {
        const horizonal =  Math.abs(_number - handPosition) % 3 ;
        const vertical = (Math.abs(_number - handPosition) - horizonal) / 3;
        result =  horizonal + vertical;
    }
    console.log(`number: ${_number} , handPosition: ${handPosition}, getDistance : ${result}`);
    return result;
}
function solution(numbers, hand) {
    let answer = [];
    let currentLeft = 10;
    let currentRight = 12;
    const leftNumbers = [1,4,7,10];   // 10은 *
    const rightNumbers = [3,6,9,12];  // 12는 #

    answer = numbers.map((number,i)=>{
        let nextHand = leftNumbers.includes(number) ? "L" : rightNumbers.includes(number) ? "R" : "";
        const _number = number === 0? 11 : number;
        if (nextHand === "L") {
            console.log(`${i} : L`);
            currentLeft = _number;
            return "L";
        }
        if (nextHand === "R") {
            console.log(`${i} : R`);
            currentRight = _number;
            return "R";
        }
        const rightDistance = getDistance(_number, currentRight);
        const leftDistance = getDistance(_number, currentLeft);
        if ( rightDistance > leftDistance) {
            currentLeft = _number;
            return "L";
        }
        if ( rightDistance < leftDistance ) {
            currentRight = _number;
            return "R";
        }
        if ( rightDistance === leftDistance ) {
            if (hand === "right") {
                currentRight = _number;
                return "R";
            } else {
                currentLeft = _number;
                return "L";
        }
    }
    })
    return answer.join('');
}
console.log(solution(numbers, hand));