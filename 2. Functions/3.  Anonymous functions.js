//!!!anonymous function is an unnamed functional expression
//анонимная функция представляет собой функциональное выражение без имени

//simple example func in arguments list

administer(patient, function (dosage) {
    if (dosage > 0) {
        inject(dosage);
    }
}, time);

//second example anonymous function
window.onload = function () { alert ("bla bla");};

//third example
setTimeout(function () {
    alert("Time to take cookies");
}, 600000);
//600000 = 1000 x 60 x 10;

//example of nested function (вложенная функция)
//in this example actionSound = nested function (function declaration)
//function fly = function expression
var fly = function(num) {
    var sound = "Fly";
    function actionSound(){
        console.log(sound);
    }
    for(var i = 0; i < num; i++){
        actionSound();
    }
}
fly(2); //if I call fly earlier, the program will fail

//example of nested function
//quack = function declaration
//quacker = function expression (if called inside a function quacker earlier, it will not work!)


quack(3); // I call quack before initialization, it's normal here
function quack(num) {
    var sound = "Quack";
    //if I call here the function quacker - the program will fail
    var quacker = function(){
        console.log(sound);
    }
    for (var i =0; i < num; i++){
        quacker();
    }
}

//built-in functional expression
//встроенное функциональное выражение

(function(food){
    if((food) === "cookies"){
        console.log("More pls");
    } else if (food === "cake"){
        console.log("yum");
    }
})("cookies");


//it's like above
var a = function(food){
    if((food) === "cookies"){
        console.log("More pls");
    } else if (food === "cake"){
        console.log("yum");
    }
}
a("cookies");//we only called the function with argument