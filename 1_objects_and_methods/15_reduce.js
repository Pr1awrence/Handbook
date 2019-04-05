//ARTICLE ABOUT: https://www.w3schools.com/jsref/jsref_reduce.asp
//The reduce() method executes a reducer function (that you provide)
//on each member of the array resulting in a single output value.

// This is an example of solving the problem from the previous task by the reduce method.
function countDevelopers(list) {
    return list.reduce((count, dev) =>
            (dev.continent === 'Europe' && dev.language === 'JavaScript')
                ? count + 1 : count
        , 0);
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

//Task from codewars: https://www.codewars.com/kata/gradually-adding-parameters/train/javascript
//here I used pseudo-array of elements 'arguments'

function add() {
    let array = Array.prototype.slice.call(arguments, 0);
    return array.reduce((sum, num, index) =>
        sum + (num * (index + 1))
        , 0);
}

console.log(add(100, 200, 300)); //1400

//Task from codewars: https://www.codewars.com/kata/582887f7d04efdaae3000090
//Need to return an array which includes the developer who is the oldest.

function findSenior(list) {
    let oldest = list.reduce((dev1, dev2) =>{
        return dev2.age > dev1.age ? dev2 : dev1}
    );
    return list.filter(dev => dev.age === oldest.age);
}

var list4 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

console.log(findSenior(list4));
//[ { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe',
//     age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia',
//     age: 49, language: 'PHP' } ]