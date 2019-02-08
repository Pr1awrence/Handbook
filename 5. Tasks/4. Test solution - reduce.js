//task from codewars
//https://www.codewars.com/kata/582887f7d04efdaae3000090/solutions/javascript
function findSenior(list) {
    let oldest = list.reduce((dev1, dev2) =>{
        return dev2.age > dev1.age ? dev2 : dev1}
        );
    return list.filter(dev => dev.age === oldest.age);
}

var list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.S', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

console.log(findSenior(list1));


//example with reduce from Danya
//var arr = [1,2,3,4];
var arr = ["a","b","c","d"];

var res = arr.reduce((f, s, i) =>{
        //console.log(f +" "+ s + " " + i);
        return f + s;
    }, "LOL"
);
console.log(res);
