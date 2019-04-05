//This example show, how does environment work (окружение)
//All local letiables are stored in the environment
//An environment is attached to the returned function

let somelet = "i'm global!";

function whereAreYou(){
    let somelet = "i'm local!";

    function globOrLoc(){
        return somelet;
    }
    return globOrLoc;
}

//Create a letiable innerFunction and assign the resulting function to it.
//The function reference stores its own environment.
let innerFunction = whereAreYou();
//Next, we call the function, process its body in the context of its environment.
let result = innerFunction();
console.log(result);