//ARTICLE ABOUT: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call

let Dog = function (name, breed) {
    this.name = name;
    this.breed = breed;
    this.city = "New York";
    this.bark = function () {
        console.log(this.name + " says woof!");
    }
};

let ShowDog = function (name, breed, weight) {
    //Passing arguments to the Dog function
    //ShowDog objects will have all the properties and methods of the Dog constructor and not was prototypes of the Dog!
    //Only with string 'ShowDog.prototype = new Dog();' fluffy will have a parent Dog
    Dog.call(this, name, breed);
    this.weight = weight;
};

Dog.prototype.run = function () {
    console.log(this.name + " has already run!");
};

let fluffy = new ShowDog("Fluffy", "Poodle", 35);
console.log(fluffy.name);
console.log(fluffy.city);
console.log(fluffy.breed);
console.log(fluffy.weight);
fluffy.bark();
console.log(fluffy.constructor());
//fluffy.run(); there will be mistake, because method 'run' attached through prototype to the first constructor