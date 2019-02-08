//this task some people decide at the reduce() and the filter() methods
//it's example with reduce
function countDevelopers(list) {
    return list.reduce((count, dev) =>
            (dev.continent === 'Europe' && dev.language === 'JavaScript')
                ? count + 1 : count
        , 0);
}

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

var list2 = [
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];

console.log(countDevelopers(list1));
console.log(countDevelopers(list2));

//test from codewars: https://www.codewars.com/kata/gradually-adding-parameters/train/javascript
//my decision with reduce
//here I used pseudo-array of elements 'arguments'

function add() {
    let array = Array.prototype.slice.call(arguments, 0);
    return array.reduce((sum, num, index) =>
        sum + (num * (index + 1))
        , 0);
}
console.log(add(100,200,300));