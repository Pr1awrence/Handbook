//task from codewars https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word){
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
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));