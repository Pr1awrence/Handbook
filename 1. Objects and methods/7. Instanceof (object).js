// the instanceof operator defines is this instance of the object from the constructor

function dogCatcher(obj) {
    return (obj instanceof Dog);
}

function Cat(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function(){
        if(this.weight > 25){
            console.log(this.name + " says Woof!");
        } else {
            console.log(this.name + " says Yip!");
        }
    };
}

var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);

var fido = {name: "Fido", breed: "Mixed", weight: 38};

var spot = new Dog("Spot", "Chihuahua", 10);
var fluffy = new Dog("Fluffy", "Poodle", 30);

var dogs = [meow, whiskers, fido, spot, fluffy];


/*
dogs.forEach(function (obj) {
    if(obj instanceof Dog){
        return console.log(obj.name + " is a Dog!");
    }
});*/

//it's the same like above, but I used a function
dogs.forEach(function (obj) {
    if(dogCatcher(obj)){
        return console.log(obj.name + " is a Dog!");
    }
});