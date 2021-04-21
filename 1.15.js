// 1.15 (**) Duplicate the elements of a list a given number of times.
// Example:
// ?- dupli([a,b,c],3,X).
// X = [a,a,a,b,b,b,c,c,c]

// What are the results of the goal:
// ?- dupli(X,3,Y)

const array = [2, 3, 3, 1, 4];
function duplicateNtimes(list, n) {
  temp = [];
  for (let i = 0; i < list.length; ++i) {
    for (let j = 0; j < n; j++) {
      temp.push(list[i]);
    }
  }
  return temp;
}
console.log(duplicateNtimes(array, 3));