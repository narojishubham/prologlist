// 1.15 (**) Duplicate the elements of a list a given number of times.
// Example:
// ?- dupli([a,b,c],3,X).
// X = [a,a,a,b,b,b,c,c,c]

// What are the results of the goal:
// ?- dupli(X,3,Y)

a = [2, 3, 3, 1, 4];
function duplicateNtimes(list, n) {
  b = [];
  for (var i = 0; i < a.length; ++i) {
    for (var j = 0; j < n; j++) {
      b.push(a[i]);
    }
  }
  return b;
}
console.log(duplicateNtimes(a, 3));