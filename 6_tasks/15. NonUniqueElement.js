//https://js.checkio.org/en/mission/non-unique-elements/

function nonUniqueElements(data) {
    let array = [];
    let array2 = [];

    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data.length; j++){
            if(data[j] === data[i] && i !== j){
                if(array.indexOf(data[j]) === -1){
                    array.push(data[j]);
                }
            }
        }
    }
    for(let z = 0; z < data.length; z++){
        if(array.indexOf(data[z]) !== -1){
            array2.push(data[z]);
        }
    }
    return array2;
}

console.log(nonUniqueElements([1, 2, 3, 1, 3]));
console.log(nonUniqueElements([0,1,2,3,4,0,1,2,4]));
console.log(nonUniqueElements([0,1,2]));
console.log(nonUniqueElements([5,5,5,5,5]));