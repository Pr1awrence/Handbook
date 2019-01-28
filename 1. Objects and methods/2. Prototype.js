//Example from the book JS

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

//prototype in this situation - property of constructor Dog
Dog.prototype.species = "Canine";
//method of constructor Dog
Dog.prototype.bark = function () {
    if (this.weight > 25){
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function () {
    console.log("Run!");
};

Dog.prototype.wag = function () {
    console.log("Wag!");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

fido.bark();//Fido says Woof!
fido.run();//Run!
fluffy.wag();//Wag!
spot.bark();//Spot says Yip!

//method override for Fido
fido.bark = function () {
    console.log(this.name + " says WOOF!");
};

fido.bark();//Fido says WOOF!

//second example about redefining a prototype with an internal property
Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
    if(this.sitting){
        console.log(this.name + " is already sit.");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting.");
    }
};

fluffy.sit();
fluffy.sit();
spot.sit();
spot.sit();


//other examples

var animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal

//alert( rabbit.eats ); // true

//The prototype value can only be an object!
//The prototype property only makes sense to the constructor


//so you can add a method to an already existing constructor (object)
Rabbit.prototype.food = function () {
    return "Carrot!";
};
//you can loop through the fields of an object using a loop
/*    for (var i in apollo){
        console.log(apollo[i]);
    }*/


//another example with Object.create() and constructor in Prototype
//I think it's bad example, because it's difficult for understand (may be)
var Person = {
    constructor: function(name, age){
        this.name = name;
        this.age = age;
        return this;
    },
    information: function () {
        console.log(this.name + " " + this.age + " years old.");
    }
};

var person1 = Object.create(Person).constructor("John",23);
var person2 = Object.create(Person).constructor("Lex",65);
var person3 = Object.create(Person).constructor("Poppy",15);

console.log(person1.name);
person2.information();
person3.information();

























