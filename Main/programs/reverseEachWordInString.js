// File Name : reverseEachWordInString.js

// INPUT : Java is best
// OUTPUT: best is Java

var input = "Java is best"

var strArr = input.split(' ');

console.log(input)
// console.log(strArr)
// console.log(strArr.length)

var output = reverseString(strArr);

console.log(output)

function reverseString(s){
    var o=""
    for(i = s.length-1;i>=0;i--){
        if(o==""){
            o = s[i];
        }else{
            o = o + " " + s[i];
        }
        // if(i==s.length-1){
        //     o = s[i];
        // }else{
        //     o = o + " " + s[i];
        // }
    }
    return o;
}
