//task from codewars https://www.codewars.com/kata/duplicate-encoder
//my decision below with regex

/*function duplicateEncode(word){
    let newStr = "";
    for(let i = 0; i < word.length; i++){
        let reg = new RegExp('\[\*' + word[i] + ']', 'gi');
        let match = word.match(reg);
        if(match.length > 1){
            newStr += ')';
        } else {
            newStr += '(';
        }
    }
    return newStr;
}*/

//other decision, best practise with indexOf

function duplicateEncode(word){
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));