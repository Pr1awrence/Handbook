//ARTICLE ABOUT: https://www.w3schools.com/js/js_object_prototypes.asp

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

//Prototype in this situation - property of constructor Dog.
Dog.prototype.species = "Canine";

//Method of constructor Dog.
Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

fido.bark();//Fido says Woof!
spot.bark();//Spot says Yip!

//Method override for Fido.
fido.bark = function () {
    console.log(this.name + " says WOOF!");
};

fido.bark();//Fido says WOOF!

//Second example about redefining a prototype with an internal property.
Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log(this.name + " is already sit.");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting.");
    }
};

fluffy.sit(); //Fluffy is now sitting.
fluffy.sit(); //Fluffy is already sit.

//You can loop through the fields of an object using a loop:
for (let i in fluffy) {
    console.log('fluffy[' + i + '] = ' + fluffy[i]);
}
//Or Object.keys() (display only properties)
console.log(Object.keys(fluffy));
//If you want to know if these properties belong to this particular object, then use hasOwnProperty
//(learn more in the topic: 3_has_own_property.js)


//Second example with inheritance:
let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

//Class rabbit inheritance of class animal.
Rabbit.prototype = animal;
let rabbit = new Rabbit("Rabbit"); //rabbit.__proto__ === animal
console.log(rabbit.eats); // true

//The prototype value can only be an object!
//The prototype property only makes sense to the constructor.

//So you can add a method to an already existing constructor (object).
Rabbit.prototype.food = function () {
    return "Carrot!";
};
console.log(rabbit.name + " eats " + rabbit.food()); //Rabbit eats Carrot!


//Third example with Object.create() and constructor in Prototype:
let Person = {
    constructor: function (name, age) {
        this.name = name;
        this.age = age;
        return this;
    },
    information: function () {
        console.log(this.name + " " + this.age + " years old.");
    }
};

let firstPerson = Object.create(Person).constructor("John", 23);
let secondPerson = Object.create(Person).constructor("Lex", 65);
let thirdPerson = Object.create(Person).constructor("Poppy", 15);

console.log(firstPerson.name);
secondPerson.information();
thirdPerson.information();