//ARTICLE ABOUT: https://www.w3schools.com/jsref/jsref_map.asp

//Map like a filter. Map create a new array, but when map called
//the function for each item and return ready result from function

//Task from codewars: https://www.codewars.com/kata/stop-gninnips-my-sdrow/javascript

function spinWords(words){
    return words.split(' ').map(function(word){
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

console.log(spinWords("Hey fellow warriors")); //Hey wollef sroirraw
console.log(spinWords("This is a test")); //This is a test
console.log(spinWords("This is another test")); //This is rehtona test