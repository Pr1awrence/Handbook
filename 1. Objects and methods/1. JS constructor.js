//from the constructor, we do not return values ​​other than "this"(however, with "new" this happens automatically)

//example with constructor Coffee (function)
//it is good practice to name constructor function wih upper-case first letter

function Coffee(roast, ounces){
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function(){
        switch (this.ounces){
            case 8:
                return "small";
            case 12:
                return "medium";
            case 16:
                return "large";
        }
    };
    this.message = function(){
        return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
    }
}
var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.message());
var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.message());

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

//next example from the book with object literal to avoid a large number of parameters
//that is, we combined the parameters into one parameter object
//если конструктор содержит слишком много параметров, возможно стоит объединить их в один параметр-объект
var cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892};

var cadi = new Car(cadiParams);

function Car(params){
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function () {
        this.started = true;
    };

    this.stop = function () {
        this.started = false;
    };

    this.drive = function () {
        if (this.started){
            console.log("Zoom-zoom");
        } else {
            console.log("You need to start the engine first");
        }
    };
}

cadi.start();
cadi.drive();
cadi.drive();
cadi.stop();
cadi.drive();
