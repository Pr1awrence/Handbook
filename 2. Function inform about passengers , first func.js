let passengers = [
    {name: 'Joe', paid: true},
    {name: 'Lora', paid: true},
    {name: 'Harry', paid: false}
];

function processPassenger(passengers, testFunc){
    for (let i = 0; i < passengers.length; i++){
        if (testFunc(passengers[i])) {
            return false;
        }
    }
    return true;
}

function printPassenger(passenger){
    let message = passenger.name;
    if (passenger.paid === true){
        message += " has paid";
    } else {
        message += " has not paid";
    }
    console.log(message);
    return false;
}

processPassenger(passengers, printPassenger);

//this method is needed for display passengers and their paid status.
//function processPassenger take in parameter function printPassengers,
//their check and print message.