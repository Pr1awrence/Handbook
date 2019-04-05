String.prototype.ipv4Address = function(){
    let arr = this.split('.');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 255 || arr[i] < 0 ||
            arr[i][0] === "0" && arr[i].length > 1){
            return false;
        }
    }
    let reg = /^[0-9]{1,3}[.]{1}[0-9]{1,3}[.]{1}[0-9]{1,3}[.]{1}[0-9]{1,3}$/g;
    return reg.test(this);
};

console.log("".ipv4Address()); //false
console.log("127.0.0.1".ipv4Address()); //true
console.log("255.255.255.255".ipv4Address()); //true
console.log("10.20.30.40".ipv4Address()); //true
console.log("10.20.030.40".ipv4Address()); //false