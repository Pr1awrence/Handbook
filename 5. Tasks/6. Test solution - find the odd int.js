/*my solution

function findOdd(array) {
    let num;
    for(let i = 0; i < array.length; i++){
        let count = 0;
            num = array[i];
            for(let j = 0; j < array.length; j++){
                if(num === array[j]){
                    count++;
                }
                if(j === array.length - 1 && count % 2 !== 0){
                    return num;
                }
        }
    }
}*/

//^ - исключающее или
//other guy solution
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));