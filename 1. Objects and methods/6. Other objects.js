//JavaScript provides a set of ready-made constructors for creating useful objects.
//JavaScript предоставляет набор готовых конструкторов для создания полезных объектов
//(даты - new Date, регулярные выражния - new Regex, массивы - new Array и т.д.)

//constructor Date (embedded object)

//current date and time
var now = new Date();

//returns a string representation of the date "Thu Feb 06 2018 17:30:30 GMT-0800(PST)"
var dateString = now.toString();

//returns a year of the date
var theYear = now.getFullYear();

//returns the number of the day of the week
var theDayOfWeek = now.getDate();

//a simple string with a date can be passed to the constructor (arbitrary date and time)
var birthday = new Date("May 1, 1994");
//or
birthday = new Date("May 1, 1994 08:03 pm");

//object Array
var emptyArray = new Array();
//the same
var emptyArray2 = [];
//but with construction "new" I can create an array with a given size
var emptyArray3 = new Array(3);
emptyArray3[0] = 1;
emptyArray3[1] = 2;
emptyArray3[2] = 3;

//In the code below, large arrays are used (from the database), and the specific size of
//such an array is unknown prior to program execution. In this case, it is more
//convenient to use the constructor when creating the array.
//в коде ниже используются большие массивы ( из базы данных), и конкретный размер такого
//массива неизвестен до выполнения программы. В этом случае удобнее использовать конструктор при создании массива
var oddNumber = new Array(1,3,5);
var n = getNumberFromDatabase();
var widgets = new Array(n);
    for(var i = 0; i < n; i++){
    widgets[i] = detDatabaseRecord[i];
}


//reverse of array values
emptyArray3.reverse();
//result = [3,2,1];
//the method join create a string with values of array
emptyArray3.join("-");
//method "every" received a function, which is check for every value in array and return result true or false.
//If function return true for every value, "every" return true
var areAllOdd = emptyArray3.every(function (x) {
    return ((x % 2) !== 0 );
});
console.log(areAllOdd);//false
