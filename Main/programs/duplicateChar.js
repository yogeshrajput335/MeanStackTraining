//node duplicateChar.js

function removeDuplicate(str, n)
    {
        // var char = []
        // for(i=0;i<n;i++){
        //     //console.log(str[i].charCodeAt(0))
        //     char[str[i].charCodeAt(0)-97] = char[str[i].charCodeAt(0)-97]?(char[str[i].charCodeAt(0)-97]++:0;
        // }
        // console.log(char)
        var s= []
        var d = []
        for(i=0;i<n;i++){
            if (s.includes(str[i])){
                if(!d.includes(str[i]) && str[i] !=' ')
                    d.push(str[i])
            }
            else {
                s.push(str[i])
            }
        }
        console.log(d)

       
    }
 
    // Driver code
        var str = "java and javascript".split("");
        var n = str.length;
        removeDuplicate(str, n)
        //console.log(removeDuplicate(str, n));
