//ARTICLES ABOUT:
//FIND (with examples): https://www.w3schools.com/jsref/jsref_find.asp
//findIndex (with examples): https://www.w3schools.com/jsref/jsref_findindex.asp

//findIndex() - return index of searched element
//find() returns the first match of the conditions in the function. If no match is found, then returns undefined

//Task from: https://www.codewars.com/kata/5827bc50f524dd029d0005f2
function getFirstPython(list) {
    let name = list.find(object => object.language === 'Python');
    return name !== undefined ? name.firstName + ', ' + name.country : 'There will be no Python developers';
    //OR: return name !== undefined ? `${name.firstName}, ${name.country}` : "There will be no Python developers";
}

let list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

let list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

console.log(getFirstPython(list1)); //'Victoria, Puerto Rico');
console.log(getFirstPython(list2)); //'There will be no Python developers');


//this code returned first object! Not value in "if"!
//bad mistake novices to return something other than an object
/*
function getFirstPython(list) {
    return list.find(function(object){
        if(object.language === 'Python'){
            return object.firstName + ', ' + object.country; //not return this value! Only object!
        }
    });
}*/