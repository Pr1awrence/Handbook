//ARTICLES ABOUT
//SOME: https://www.w3schools.com/jsref/jsref_some.asp
//EVERY: https://www.w3schools.com/jsref/jsref_every.asp

//Task from codewars: https://www.codewars.com/kata/5827acd5f524dd029d0005a4
//I need to return 'true', if there is only one developer, whose language === 'Ruby'. Otherwise, return 'false'.
//!If you need to return ALL matches, use the EVERY method

function isRubyComing(list) {
    function searchSome(object){
        return object.language === 'Ruby';
    }
    return list.some(searchSome);
}

let list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

let list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' }
];

console.log(isRubyComing(list1)); //true
console.log(isRubyComing(list2)); //false


//Task from codewars with every: https://www.codewars.com/kata/58287977ef8d4451f90001a0

function isSameLanguage(list) {
    return list.every(developer => developer.language === list[0].language);
}

var list3 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

console.log(isSameLanguage(list3)); //true