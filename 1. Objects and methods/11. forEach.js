//task
// https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers/train/javascript
//forEach method for each value of object (myMap.forEach(callback[, thisArg]))
//more https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach

function greetDevelopers(list) {
    list.forEach(function(developer){
        developer.greeting = 'Hi '+ developer.firstName + ', what do you like the most about ' + developer.language + '?';
    });
    return list;
}

var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

//before than I decide this task with loop "for"

//it's work too! Need to practice
//!developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;


//https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages
//second example
//I need to count how many languages person's says

var array = [
    {firstName: 'John', secondName: 'Smith', language: 'english'},
    {firstName: 'Lex', secondName: 'March', language: 'russian'},
    {firstName: 'Joan', secondName: 'Qwert', language: 'english'},
];
function countLanguages(array) {

    var languagesCounter = {};
    array.forEach(
        (person) => languagesCounter[person.language] === undefined ?
            languagesCounter[person.language] = 1 : languagesCounter[person.language]++ );
    //the same
    // array.forEach(x => languagesCounter[x.language] = (languagesCounter[x.language] || 0) + 1);
    console.log(languagesCounter);
}
countLanguages(array);