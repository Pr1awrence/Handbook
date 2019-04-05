//my test from codewars
//https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented/train/javascript
let list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
];

let list2 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
];

function allContinents(list) {
    if(list.find(dev => dev.continent === 'Africa') &&
        list.find(dev => dev.continent === 'Americas') &&
        list.find(dev => dev.continent === 'Asia') &&
        list.find(dev => dev.continent === 'Europe') &&
        list.find(dev => dev.continent === 'Oceania')){
        return true;
    } else {
        return false;
    }
}

allContinents(list1);
allContinents(list2);


//Danya decision
function allContinents(list) {
    let containContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    for(let i = 0; i < containContinents.length; i++){
        if(!list.find(developer => developer.continent === containContinents[i])){
            return false;
        }
    }
    return true;
}


//other example (decision other people in site) with method 'includes'
function allContinents(list) {
    const continents = list.map(x => x.continent)
    return continents.includes('Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania')
}

//!This task can decide with new Set!