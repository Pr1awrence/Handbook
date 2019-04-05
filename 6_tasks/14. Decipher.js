//https://www.codewars.com/kata/581e014b55f2c52bb00000f8/solutions/javascript

function decipherThis(str) {
    let arr = str.split(" ");
    let newStr = '', word2 = '', num = '';
    arr.forEach(word => {

        if(!isNaN(Number(word))){
            newStr += String.fromCharCode(word) + ' ';
        } else {

            for (let i = 0; i < word.length; i++) {
                if (!isNaN(Number(word[i])) && isNaN(Number(word))) {
                    num += word[i];
                } else {
                    newStr += String.fromCharCode(num);
                    if(num.length === word.length - 1){
                        newStr += word[i] + ' ';
                    } else {
                        word2 = word[word.length - 1];
                        word2 += word.substring(num.length + 1, word.length - 1);
                        word2 += word[i];
                        newStr += word2 + ' ';
                    }
                    num = '';
                    break;
                }
            }
        }
    });
    return newStr.trim();
}


//decipherThis('72eva 97');
decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o');// 'Have a go at this and see how you do'