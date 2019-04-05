//ARTICLE ABOUT: https://www.w3schools.com/js/js_object_prototypes.asp

let Dog = function (name, breed) {
    this.name = name;
    this.breed = breed;
    this.city = "New York";
    this.bark = function () {
        console.log(this.name + " says woof!");
    };
    this.run = function () {
        console.log(this.name + " has already run!");
    }
};

let ShowDog = function (name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
};

//Prototype (parent) = Dog
ShowDog.prototype = new Dog();
//If you want create second letiable of dog (CompetitiveDog maybe), you can write is the same.
//CompetitiveDog.prototype = newDog();

//Override parent method
ShowDog.prototype.bark = function () {
    console.log(this.name + " says ...");
};
let roxy = new ShowDog("Roxy", "Poodle", 20);
console.log(roxy.name);
roxy.bark();


//Other example for check the type of an object at run time and check the constructor.
let fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}
let scotty = new ShowDog("Scotty", "Scottish Terrier", 15);

//Responsible for setting up the constructor
scotty.constructor = ShowDog;

if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);