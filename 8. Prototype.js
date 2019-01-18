var animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true

//Need to add this topic

//The prototype value can only be an object!
//The prototype property only makes sense to the constructor


//so you can add a method to an already existing constructor (object)
Dog.prototype.bark = function (){
    return "Woof!";

//you can loop through the fields of an object using a loop
    for (var i in apollo){
        console.log(apollo[i]);
    }


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