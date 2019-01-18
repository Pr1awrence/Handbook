//My first decision

function change(name, items, payment) {

    let sumBuy = 0;
    for (let i = 0; i < items.length; i++) {
        sumBuy += items[i];
    }
    if (name === "John") {
        let remainder = (payment - sumBuy) - Math.round(payment - sumBuy);
        return payment - sumBuy > 0 ? (Math.floor(payment - sumBuy) + (remainder * 2)).toFixed(2) : 0;
    } else {
        return payment - sumBuy > 0 ? (payment - sumBuy).toFixed(2) : -1;
    }
}

console.log(change("John", [1.1, 2.2, 3.3], 10));


//my second decision after refactor

function change(name,items,payment){
    let sumOfBuy = 0;
    for(let i = 0; i < items.length; i++){
        sumOfBuy += items[i];
    }
    let change = payment - sumOfBuy;
    if(name === "John"){
        if(change > 0){
            let fraction = change - Math.floor(change);
            change += fraction;
        } else {
            change = 0;
        }
    }
    return Math.round(change * 100) / 100;
}
