//task from code wars https://www.codewars.com/kata/55c45be3b2079eccff00010f
//need to change "сортировка пузырьком" bubble sort
//my decision below
/*function order(words) {
    let arr = words.split(" ");
    let reg = /\d/;
    let newArr = [];
    for(let i = 1; i < arr.length + 1; i++) {
        arr.forEach((word) => {
            if (i == word.match(reg)) {
                newArr.push(word);
            }
        });
    }
    return newArr.join(" ");
}*/

//more clever decision with method sort and compare function
function order(words){

    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));