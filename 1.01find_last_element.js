// 1.01 (*) Find the last element of a list.
// Example:
// ?- my_last(X,[a,b,c,d]).
// X = d

var array = [2,4,5,3,6,7,9];

var lastNumber = array.length
console.log(lastNumber)
lastNumber -= 1;
var value = array[lastNumber]
console.log(value)
