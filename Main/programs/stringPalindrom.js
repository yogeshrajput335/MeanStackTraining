// Find the length of the string

var str = "MADAM";

var l = getLength(str);
console.log("Is Palindrom : "+l);

function getLength(str){
    let isPalindrom = true;
    for(i=0;i<str.length/2;i++){
        //l1 = l1+1;
        if(str[i] != str[str.length-1-i]){
            isPalindrom = false;
            break;
        }
    }
    return isPalindrom;
}

//MADAM
//01234

