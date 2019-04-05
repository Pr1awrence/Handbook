//For learn better about the method, I solve problems. This task from:
//https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers/train/javascript

//forEach method for each value of object (myMap.forEach(callback[, thisArg]))
//ARTICLE ABOUT: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach

function greetDevelopers(list) {
    list.forEach(function (developer) {
        developer.greeting = 'Hi ' + developer.firstName + ', what do you like the most about ' + developer.language + '?';
        //OR: developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    });
    return list;
}

let list1 = [
    {firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'},
    {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'},
    {firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'}
];

greetDevelopers(list1);//now all developers have the property 'greeting'

//Second task from:
//https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages
//I need to count how many languages person's says

let array = [
    {firstName: 'John', secondName: 'Smith', language: 'english'},
    {firstName: 'Lex', secondName: 'March', language: 'russian'},
    {firstName: 'Joan', secondName: 'Show', language: 'english'},
];

function countLanguages(array) {

    let languagesCounter = {};
    array.forEach(
        (person) => languagesCounter[person.language] === undefined ?
            languagesCounter[person.language] = 1 : languagesCounter[person.language]++);
    //the same
    // array.forEach(x => languagesCounter[x.language] = (languagesCounter[x.language] || 0) + 1);
    console.log(languagesCounter);
}

countLanguages(array); //{ english: 2, russian: 1 }