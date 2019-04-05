//https://leetcode.com/problems/fibonacci-number/

let fib = function (N) {
//let sum = 0;
    let prevNum = 0;
    let nextNum = 1;

// while(N > 0){
// sum = prevNum + nextNum;
// prevNum = nextNum;
// nextNum = sum;
// N--;
// }
// return prevNum;

    return rec(prevNum, nextNum, N);
};

function rec(prevNum, nextNum, pos) {
    if (pos !== 0) {
        pos--;
        return rec(nextNum, prevNum + nextNum, pos);
    } else {
        return prevNum;
    }
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(4));