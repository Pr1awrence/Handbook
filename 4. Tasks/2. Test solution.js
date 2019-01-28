//Task:
//https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka

function sumDigPow(a, b) {
    for(let i = a; i < b; i++){
        let str = (i).toString();

        //let count = 1;
        let numPow = 0;
        for(let j = 0; j < str.length; j++){
            numPow += Math.pow(str[j],j+1);
            //count++;
            if(i === numPow){
                arrayAnswers.push(i);
            }
        }
    }
    console.log(arrayAnswers);
    return arrayAnswers;
}
sumDigPow(1,2646799);