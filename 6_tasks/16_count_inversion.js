//НУЖНО РЕШИТЬ ПРАВИЛЬНО, СЕЙЧАС АЛГОРИТМ НЕВЕРНЫЙ

//https://js.checkio.org/mission/count-inversions/solve/

function countInversion(sequence){
    let inversion = 0;
    for(let i = 0; i < sequence.length; i++){
        for(let j = i + 1; j < sequence.length; j++){
            if(sequence[i] > sequence[j]){
                let intermediate = sequence[i];
                sequence[i] = sequence[j];
                sequence[j] = intermediate;
                inversion++;
            } else {
                break;
            }
        }
    }
    return inversion;
}

console.log(countInversion([1, 2, 5, 3, 4, 7, 6])); // 3
console.log(countInversion([0, 1, 2, 3])); // 0
console.log(countInversion([99, -99])); // 1
console.log(countInversion([5, 3, 2, 1, 0])); // 10
console.log(countInversion([5,12,-85,-92,-32,-8,1,-34,-55,-74,-44,-63,84,8,65,54,71,90,-81,98,-17,82,-45,-72,37,26,91,97,64,-62,-24,-70,42,56,-67,0,-78,-87,-57,-56,67,-2,11,-16,7,13,-1,-46,-54,16,-4,-14,63,-15,-48,-66,36,46,75,85,-79,-83,-52,73,49,-3,88,-10,60,-21,-75,38,44,2,-89,-65,-96,-22,-76,-31,-58,55,58,14,-47,20,80,-60,93,62,-71,24,45,-64,94,29,-94,-36,57,-23,6,51,15,-5,-53,25,-41,-97,89,-59,66,87,-19,-38,-27,-86,-9,40,18,-93,30,-20,81,34,3,92,77,-25,-49,74,-51,17,41]));
//4181