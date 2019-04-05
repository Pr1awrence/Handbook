//my decision tast from codewars: https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript
/*let uniqueInOrder=function(iterable){
    if(typeof iterable === 'string'){
        iterable = iterable.split('');
    }
    let newArr = [];
    iterable.length !== 0 ? newArr.push(iterable[0]) : 0;
    for(let i = 0; i < iterable.length - 1; i++){
        let nowChar = iterable[i];
        let nextChar = iterable[i + 1];

        if(nowChar !== nextChar){
            newArr.push(nextChar);
        }
    }
    return newArr;
};*/

//other decision with reduce
let uniqueInOrder=function(iterable){
    if(typeof iterable === 'string'){
        iterable = iterable.split('');
    }
    let newArr = [];

    if(iterable.length > 0){
        let arr = iterable.reduce((prev, curr) => {
                prev !== curr ? newArr.push(prev) : 0;
                return curr;
            }
        );
        newArr.push(arr);
    }
    return newArr;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));// ['A','B','C','D','A','B']
console.log(uniqueInOrder('ABBBCC'));// ['A','B','C']
console.log(uniqueInOrder([]));// []