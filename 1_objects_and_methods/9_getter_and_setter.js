//ARTICLES ABOUT:
//GET: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/get
//SET: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/set

let person1 = {
    firstName: "Joe",
    secondName: "Smith",
    workExperience: 12,
    get representation() {
        return this.firstName + " " + this.secondName +
            " worked in our company " + this.workExperience + " years.";
    }
};
console.log(person1.representation); //Joe Smith worked in our company 12 years.

//Then we use getter, we are not write "()" like in simple method because getter and setter as a property.
//Example of getter
let person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language.toUpperCase();
    }
};
console.log(person2.language); //en

//Example of setter
let person3 = {
    firstName: "",
    secondName: "Smith",
    workExperience: 12,
    language: "",

    set lang(lang) {
        this.language = lang.toUpperCase();
    }
};
person3.lang = "en";

console.log(person3.language); //EN