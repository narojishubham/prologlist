// 1.05 (*) Reverse a list.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var rev = fruits.reverse()

console.log(rev ,'reversed string using the function')

// using string

function reverseString(str) {
    // var newString = ""   ;
    for (var i = str.length - 1; i >= 0; i--) {
      var newString = newString + str[i];
    }
    return newString;
}
var str = reverseString('testing');
console.log(str)