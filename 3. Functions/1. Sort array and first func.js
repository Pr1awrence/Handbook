let productArray = [
    {name: "Pepsi-Cola", calories: 170, color: "red", sold: 18200},
    {name: "Fanta", calories: 120, color: "orange", sold: 11900},
    {name: "Diet Cola", calories: 20, color: "purple", sold: 9100},
    {name: "Sprite", calories: 150, color: "clear", sold: 15200}
];

function compareSold(firstObj, secondObj) {
    return firstObj.sold - secondObj.sold;
    //change places of object for decrease
}

productArray.sort(compareSold);

//will make the price sorting ascending