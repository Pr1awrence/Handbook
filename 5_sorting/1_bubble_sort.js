//ARTICLE ABOUT: https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2
//RU ARTICLE: https://medium.com/@alivander/-сортировка-пузырьком-javascript-54462b2989a6

//Not an effective way to implement, has the complexity of O (n²).
//Its positive side is simple implementation.

let arr = [9,8,7,6,11,15,20];
for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            let min = arr[j];
            arr[j] = arr[i];
            arr[i] = min;
        }
    }
}
console.log(arr);