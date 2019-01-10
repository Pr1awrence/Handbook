var obj = {firstName: "Joe",
    secondName: "Smith",
    workExperience: 12,
    get name() {
        return this.firstName + " " + this.secondName + " worked in our company " + this.workExperience + " years.";
    }
}
obj.name;

//my examples of getter
//then we use getter, we are not write "()" like in simple method because getter and setter as a property

var person = {
    firstName: "John",
    lastName : "Doe",
    language : "en",
    get lang() {
        return this.language.toUpperCase();
    }
};
//other simple example of getter


var obj = {
    firstName: "",
    secondName: "Smith",
    workExperience: 12,
    language: "",

    set lang(lang) {
        this.language = lang.toUpperCase();
    }
};
obj.lang = "en";

console.log(obj.language);

//simple example of setter