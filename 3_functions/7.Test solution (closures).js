function once(fn) {
    let implement = false;

    return function(param){
        if(!implement){
            implement = true;
            return fn(param);
        }
    }
}

let logOnce = once(console.log);
logOnce("foo"); // -> "foo"
logOnce("bar"); // -> no effect


//decision by autor
/*
function once(fn) {
    let implement = false;

    return function(...args){
        if(!implement){
            implement = true;
            return fn.apply(this, args);
        }
    }
}*/
