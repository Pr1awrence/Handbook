//This example show, how does environment work (окружение)
//All local variables are stored in the environment
//An environment is attached to the returned function

var someVar = "i'm global!";

function whereAreYou(){
    var someVar = "i'm local!";

    function globOrLoc(){
        return someVar;
    }
    return globOrLoc;
}

//Create a variable innerFunction and assign the resulting function to it.
//The function reference stores its own environment.
var innerFunction = whereAreYou();
//Next, we call the function, process its body in the context of its environment.
var result = innerFunction();
console.log(result);