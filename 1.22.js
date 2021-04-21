// 1.22 (*) Create a list containing all integers within a given range.
// Example:
// ?- range(4,9,L).
// L = [4,5,6,7,8,9]



function range(start, end) {
    const newArray = [];
    for (i = start; i <= end; i += 1) {
      newArray.push(i);
    }
    return newArray;
  }
  var array = range(4,9)
  console.log(array)