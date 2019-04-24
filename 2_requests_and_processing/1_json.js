//ARTICLE ABOUT: https://www.w3schools.com/js/js_json_intro.asp
//RU ARTICLE: https://learn.javascript.ru/json
//JSON is a syntax for storing and exchanging data

let text = '{ "employees" : ' +
    '[{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let obj = JSON.parse(text);

let result = obj.employees[1].firstName + " " + obj.employees[1].lastName;
console.log(result); //Anna Smith

//Example to storing and retrieving data
let myObj, myJSON;

// Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
