//task from https://www.codewars.com/kata/valid-phone-number/train/javascript
//if you just want to know if the pattern is in the string - USE regex.test(string)
//string.match(regex) for all matches!

function validPhoneNumber(phoneNumber){
    let reg = /^[(]{1}[0-9]{3}[)]{1}[\s]{1}[0-9]{3}[-]{1}[0-9]{4}$/g;
    return phoneNumber.match(reg) !== null;
}

console.log(validPhoneNumber("(123) 456-7890")); //true
console.log(validPhoneNumber("(1111)555 2345")); //false
console.log(validPhoneNumber("(098) 123 4567")); //false