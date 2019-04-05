//ARTICLE ABOUT: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

// Define an object
let obj = {counter: 0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
    get: function () {
        this.counter = 0;
    }
});
Object.defineProperty(obj, "increment", {
    get: function () {
        this.counter++;
    }
});
Object.defineProperty(obj, "decrement", {
    get: function () {
        this.counter--;
    }
});
Object.defineProperty(obj, "add", {
    set: function (value) {
        this.counter += value;
    }
});
Object.defineProperty(obj, "subtract", {
    set: function (value) {
        this.counter -= value;
    }
});

obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
console.log(obj.counter);