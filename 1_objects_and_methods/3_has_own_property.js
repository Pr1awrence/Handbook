//ARTICLE ABOUT: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function () {
    console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function () {
    this.errorMessage = "I appear to have a short circuit!";
};

let robby = new Robot("Robby", 1956, "Dr. Morbius");
let rosie = new Robot("Rosie", 1962, "George Jetson");

rosie.reportError();
robby.reportError();
robby.spillWater();//here we redefined the prototype property "errorMessage" with an internal property
rosie.reportError();
robby.reportError();

console.log(robby.hasOwnProperty("errorMessage"));//true
console.log(rosie.hasOwnProperty("errorMessage"));//false