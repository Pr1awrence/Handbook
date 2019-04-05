/*function highAndLow(numbers){
    let array = numbers.split(" ");
    return Math.max(...array) + " " + Math.min(...array);
}

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"*/

function highAndLow(array){
    return Math.max(...array) + " " + Math.min(...array);
}
console.log(highAndLow([1,2,3,4,5]));