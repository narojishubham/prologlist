// (**) Drop every N'th element from a list.
// Example:
// ?- drop([a,b,c,d,e,f,g,h,i,k],3,X).
// X = [a,b,d,e,g,h,k]


const array = ["k", "T", "h", "a", "i", "s"];

function dropNthElement(array, nth) {
   updatedArray = [];
  for (i = 0; i < array.length; i++) {
    // if (array[i] == nth)
    if (i % nth != 0) 
    {
      updatedArray.pop(array[i]);
    }
  }
  return updatedArray;
}
console.log(dropNthElement(array, 3));
console.log(updatedArray,'latest array is')