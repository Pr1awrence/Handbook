/*ARTICLE ABOUT: https://www.w3schools.com/js/js_object_constructors.asp
From the constructor, we do not return values ​​other than "this"(however, with "new" this happens automatically).

Example with constructor Coffee (function).
It is good practice to name constructor function wih upper-case first letter.*/

function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function () {
        switch (this.ounces) {
            case 8:
                return "small";
            case 12:
                return "medium";
            case 16:
                return "large";
        }
    };
    this.message = function () {
        return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
    }
}

let houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.message());
let darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.message());

/*
!!!You cannot add a new method to an object constructor the same way you add a new method to an existing object.

After constructor we can add property or method to an existing object easily.
PROPERTY EXAMPLE - firstDog.wool = "long";
METHOD EXAMPLE - firstDog.countryLive = function(){ return "live in Paris at " + this.age + " years.";};

Next example with object literal to avoid a large number of parameters.
That is, we combined the parameters into one parameter object.
RU: Если конструктор содержит слишком много параметров, возможно стоит объединить их в один параметр-объект.*/

let cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

let cadi = new Car(cadiParams);

function Car(params) {
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
        if (this.started) {
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