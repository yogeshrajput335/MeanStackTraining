// Find the length of the string

var str = "Hello i am from blueverse";

var l = getLength(str);
console.log("Length : "+l);
function getLength(str){
    let l1=0
    for(i=0;i<str.length;i++){
        //l1 = l1+1;
        if(str[i] != " "){
            l1++;
        }
    }
    return l1;
}