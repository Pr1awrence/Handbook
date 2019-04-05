//task from https://www.codewars.com/kata/iq-test/train/javascript

function iqTest(numbers){
    let arr = numbers.split(' ');
    let evens = 0, odds = 0;

    for(let i = 0; i < 3; i++){
        arr[i] % 2 === 0 ? odds++ : evens++;
    }
    let odd = odds > evens;
    let index = 0;

        for(let j = 0; j < arr.length; j++){
            if(odd) {
                if (arr[j] % 2 !== 0) {
                    index = j + 1;
                    break;
                }
            } else {
                if (arr[j] % 2 === 0){
                    index = j + 1;
                    break;
                }
            }
        }
        return index;
    }

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 2"));
console.log(iqTest("1 1 2"));


//my first decision - 2 bad solutions with .filter and long condition if
/*
function iqTest(numbers){
    let arr = numbers.split(' ');
    let first = arr[0], second = arr[1], third = arr[2], oddOrEven;
    if(first % 2 === 0 && second % 2 === 0 || first % 2 === 0 && third % 2 === 0 ||
        second % 2 === 0 && third % 2 === 0){
        oddOrEven = 'odd';
    } else {
        oddOrEven = 'even';
    }
    let evenNum = arr.indexOf(arr.filter(num => num % 2 !== 0).join()) + 1;
    let oddNum = arr.indexOf(arr.filter(num => num % 2 === 0).join()) + 1;

    return oddOrEven === 'odd' ? evenNum : oddNum;
}*/
