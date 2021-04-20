// (**) Drop every N'th element from a list.
// Example:
// ?- drop([a,b,c,d,e,f,g,h,i,k],3,X).
// X = [a,b,d,e,g,h,k]

var array = [1,2,3,4];

function dropNthElement(array, nth) {
   updatedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i % nth != 0) 
    {
      updatedArray.push(array[i]);
      console.log(updatedArray,'update')
    }
    console.log(i, 'the i value')
  }
  return updatedArray;
}
console.log(dropNthElement(array,2));
console.log(updatedArray,'latest array is')