//https://leetcode.com/problems/reverse-string/

let reverseString = function (s) {
    let i = 0;
    return rec(s, i);
};

function rec(array, i) {
    if (i < array.length / 2) {
        let char = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = char;
        i++;
        return rec(array, i);
    } else {
        return array;
    }
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
