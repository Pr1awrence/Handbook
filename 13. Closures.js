//!!!closures are often used to maintain state in event handlers
//замыкания часто используются для сохранения состояния в обработчиках событий


//first example with counter
function makeCounter() {
    var count = 0; //free variable for counter (свободная переменная для функции counter)
    return function counter() {// it's the same like in a 7'th string
        return count++;
    }
    //return counter; //this is closure, the value of count saved in his environment
}

var doCount = makeCounter();//at call func makeCounter we received closure: function counter with her environment
console.log(doCount());//we call func doCount - this leads to the performance of the body function counter
console.log(doCount());
console.log(doCount());




//second example -counter with anonymous function and self-invoking function
var add = (function () {
    var counter = 0;
    return function (){
        counter += 1;
        return counter
    }
})();

add();
add();
add();



//third example with guess password
function makePassword(password) {
    return function guess(passwordGuess) {
        return (password === passwordGuess);
    };
}
var tryGuess = makePassword("secret");
console.log("Guessing \"nope\": " + tryGuess("nope"));
console.log("Guessing \"secret\": " + tryGuess("secret"));


//fourth example with multiplication
//function returned from "multN" (func "multM") is a closure with an environment containing free variable n
function multN(n) {
    return function multM(m) {
        return n*m;
    }
}
var multNumber = multN(5);
//we can no write new argument at "multN" because multM (func) remembered first arg "5"
console.log(multNumber(6));
console.log(multNumber(7));
console.log(multNumber(10));



//five example - one option of counter
//we create a new object with one method "increment"
//this example like first with counter, but we choose object and call their method
//метод обращается к переменной count в своем окружении
function makeCounterNew() {
    var count = 0;
    return {
        increment: function () {
            return count++;
        }
    }
}
var counter = makeCounterNew();//when we call makeCounterNew, counter received object with one method (closure)
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

