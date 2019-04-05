//ARTICLE ABOUT: https://www.w3schools.com/jsref/jsref_filter.asp

//The filter() method creates a !new array with all the elements that
//!pass the test specified in the passed function.

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

let longWords = words.filter(word => word.length > 6);
console.log(longWords);
//new filtered array longWords ["exuberant", "destruction", "present"]


//Task from: https://www.codewars.com/kata/582746fa14b3892727000c4f

function countDevelopers(list) {
    return list.filter(developer => developer.continent === 'Europe' && developer.language === 'JavaScript').length;
}

let list1 = [
    {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript'},
    {firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript'},
    {firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML'},
    {firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS'}
];

let list2 = [
    {firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML'},
    {firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML'}
];

console.log(countDevelopers(list1)); //1
console.log(countDevelopers(list2)); //0

