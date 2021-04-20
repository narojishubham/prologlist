// 1.20 (*) Remove the K'th element from a list.
// Example:
// ?- remove_at(X,[a,b,c,d],2,R).
// X = b
// R = [a,c,d]


const array = ["k", "T", "h", "a", "i", "s"];

function dropElement(arr, nth) {
  newArray = [];
  for (i = 0; i < arr.length; i++) {
    if (i != nth) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(dropElement(array, 3));