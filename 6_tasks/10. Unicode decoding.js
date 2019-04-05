function decode(str) {
    if(typeof str !== 'string'){
        return "Input is not a string";
    }
    let arr = str.split("");
    arr.forEach((char,index) => {
        let uni = char.charCodeAt();
        if(uni >= 65 && uni <= 90){
            arr[index] = String.fromCharCode(90 - (uni - 65));
        } else if(uni >= 97 && uni <= 122){
            arr[index] = String.fromCharCode(122 - (uni - 97));
        }
    });
    return arr.join("");
}

console.log(decode("yvvi"));
console.log(decode(["Beer"]));
console.log(decode(123));
console.log(decode("Hvv? R'n mlg gszg wifmp, r xzm hgroo gzpv nb xolgsvh luu"));
console.log(decode("Hfiv r xzm wzmxv lm xlk'h xzi, slow nb yvvi"));
console.log(decode("Ovg'h hdrn rm gsv ulfmgzrm!"));
console.log(decode("Blf zoivzwb szw 10 yvvih"));