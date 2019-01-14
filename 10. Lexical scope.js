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

var innerFunction = whereAreYou();
var result = innerFunction();
console.log(result);