//First Function:
//EN: Functions of the first class can be transferred to other objects from functions. They can also be assigned to variables.
//RU: Функции первого класса трактуются как объекты, то есть могут быть переданы другим функциям и их можно вернуть
//из функций. Так же их можно присваивать переменным.

//Example first function (sorting array):
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

//Higher-Order function:
//EN: A higher-order function is a function that can take another function as an argument, or that returns a function as a result.
//RU: Функция высшего порядка — это функция, которая может принимать другую функцию в качестве аргумента или
//возвращать другую функцию в качестве результата.
//- A simple example of returning an anonymous function