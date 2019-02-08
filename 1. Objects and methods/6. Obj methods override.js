//#1 - using the built-in String method
/*function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
let toy = new Robot("Toy", 2013, "Avary");
console.log(toy.toString()); [object Object]*/

//#2 - changing the built-in String method
function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.toString = function () {
    return this.name + " Robot belonging to " + this.owner;
};

let toy = new Robot("Toy", 2013, "Avary");
console.log(toy.toString());//Toy Robot belonging to Avary

//#3 - add your method to an embedded object
String.prototype.cliche = function () {
    let cliche = ["lock and load", "touch base", "open the kimono"];
    for (let i = 0; i < cliche.length; i++) {
        let index = this.indexOf(cliche[i]);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};

let sentences = ["I'll send my car around to pick you up.", "Let's touch base i ne the morning and see where we are",
    "We don't want to open the kimono, we just want to inform them"];

for (let i = 0; i < sentences.length; i++) {
    let phrase = sentences[i];
    if(phrase.cliche()){
        console.log("CLICHE ALERT: " + phrase);
    }
}