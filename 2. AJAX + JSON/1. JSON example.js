//about: https://www.w3schools.com/js/js_json_intro.asp
//JSON is a syntax for storing and exchanging data

var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);

let result = obj.employees[1].firstName + " " + obj.employees[1].lastName;
console.log(result);

//example to storing and retrieving data
var myObj, myJSON, text, obj;

// Storing data:
myObj = { name: "John", age: 31, city: "New York" };
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;