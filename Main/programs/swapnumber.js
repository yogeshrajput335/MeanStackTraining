// node swapnumber.js
var a = 10;
var b = 20;

var temp = a;
a = b;
b = temp;

console.log('a:'+a)
console.log('b:'+b)

// Swapping two number without using temp variable
var a1 = 10;
var b1 = 20;

a1 = a1+b1; // 30 
b1 = a1-b1; // 10
a1 = a1-b1; // 20

console.log('a1:'+a1)
console.log('b1:'+b1)

