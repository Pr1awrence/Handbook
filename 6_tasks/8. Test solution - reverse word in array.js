//my decision for task at codewars https://www.codewars.com/kata/stop-gninnips-my-sdrow/javascript

function spinWords(str){
    let arr = str.split(" "), reverceArr = [];
        arr.forEach((word) => word.length >= 5 ? reverceArr.push(word.split("").reverse().join("")) : reverceArr.push(word)
);
        return reverceArr.join(" ");
}
console.log(spinWords("Hey fellow warriors"));

//here the best choice can be function map like below
function spinWords(words){
    return words.split(' ').map(function(word){
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}