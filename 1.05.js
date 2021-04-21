// 1.05 (*) Reverse a list.



var fruits = ["Banana", "Orange", "Apple", "Mango"];
function reverseString(str) {
    var newString = []  ;
    for (var i = str.length - 1; i >= 0; i--) {
      newString.push(str[i]);
    }
    return newString;
}
var str = reverseString(fruits);
console.log(str)



