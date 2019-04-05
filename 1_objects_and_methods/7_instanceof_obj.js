//The instanceof operator defines is this instance of the object from the constructor.

function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            console.log(this.name + " says Woof!");
        } else {
            console.log(this.name + " says Yip!");
        }
    };
}

let meow = new Cat("Meow", "Siamese", 10);
let whiskers = new Cat("Whiskers", "Mixed", 12);

let fido = {name: "Fido", breed: "Mixed", weight: 38};

let spot = new Dog("Spot", "Chihuahua", 10);
let fluffy = new Dog("Fluffy", "Poodle", 30);

let dogs = [meow, whiskers, fido, spot, fluffy];


/*
dogs.forEach(function (obj) {
    if(obj instanceof Dog){
        return console.log(obj.name + " is a Dog!");
    }
});*/

//It's the same like above, but for convenience, I use the function.
function dogCatcher(obj) {
    return (obj instanceof Dog);
}

dogs.forEach(function (obj) {
    if (dogCatcher(obj)) {
        return console.log(obj.name + " is a Dog!");
    }
});