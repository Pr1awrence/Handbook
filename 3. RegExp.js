function wordSearch(keyWorld, text){
    let match = text.match("\\b" + keyWorld + "\\b");
    return match === null ? false : match.length > 0;
}

//regex solution of Danya, correct solution with expression compare of null

function wordSearch(word, text){
    let keyWord = new RegExp("\\b" + word + "\\b");
    return text.match(keyWord) >= 0 ? false : true;
}


//regex my solution (second)
//it is not correct, because we work with object (.length), and in some tests we have a bad result with null



/*
SIMPLE TEST
console.log(wordSearch("dolor", myText) === true);
console.log(wordSearch("it dolor", myText) === false);
console.log(wordSearch("nisl", myText) === true);
console.log(wordSearch("elit.", myText) === false);*/


/*
TEXT FOR SAMPLE
nisl
nisl adipiscing est amet pulvinar id adipiscing sit Nunc amet id Nunc consectetur sagittis sed sed sit dolor sagittis sed consectetur sit Nunc id sagittis Nunc sed elit. Nunc sed pulvinar amet est orci elit. non Nunc sagittis sit dolor orci consectetur ipsum orci non sed Nunc nisl elit. pulvinar
*/


/*
MY FIRST BAD SOLUTION - NOT WORK, BECAUSE FALSE REGEX
function wordSearch(word, text) {
    //let newWord = word.replace(" ", "");
    //newWord = newWord.replace(".", "");
    //newWord = newWord.replace(",", "");
    let regExp = new RegExp(word);
    let result = text.match(regExp);
    if (result.length >= 0) {
        //console.log(word + "/ " + word + "/ " + text);
        return true;
    } else {
        //console.log(word + "/ " + word + "/ " + text);
        return false;
    }
}*/