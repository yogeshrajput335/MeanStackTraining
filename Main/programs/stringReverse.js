// Find the length of the string

var str = "Hello i am from blueverse";

let l = getReverse(str);
console.log("Reverse String : "+ l);
function getReverse(str){
    let s = '';
    for(i=str.length-1;i>=0;i--){
        s = s+ str[i];
    }
    return s;
}