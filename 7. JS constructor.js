function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

//simple example
//it is good practice to name constructor function wih upper-case first letter
//Person - constructor (function)

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

﻿
//my example with constructor Dog
//I added a method at constructor
//!!!You cannot add a new method to an object constructor the same way you add a new method to an existing object.

function Dog(name, age, like, color, country){
    this.name = name;
    this.age = age;
    this.like = like;
    this.color = color;
    this.country = country;
    this.countryLive = function(){return "He lived here at " + this.country + " at " + this.age + " years";}
}

var firstDog = new Dog("Pussy", "5", "running", "black and white", "Paris");
var secondDog = new Dog("Charli", "2", "sitting", "orange", "London");

console.log(firstDog.name + " likes " + firstDog.like + " a lot. He have " + firstDog.color + " color." + firstDog.countryLive());
console.log(secondDog.name + " likes " + secondDog.like + " a lot. He have " + secondDog.color + " color." + secondDog.countryLive());

//after constructor we can add property or method to an existing object easily
//METHOD EXAMPLE - firstDog.countryLive = function(){ return "live in Paris at " + this.age + " years.";};
//PROPERTY EXAMPLE - firstDog.wool = "long";