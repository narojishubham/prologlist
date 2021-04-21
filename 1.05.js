// 1.05 (*) Reverse a list.



const fruits = ["Banana", "Orange", "Apple", "Mango"];
function reverseString(str) {
    let newString = []  ;
    for (var i = str.length - 1; i >= 0; i--) {
      newString.push(str[i]);
    }
    return newString;
}
let str = reverseString(fruits);
console.log(str)



