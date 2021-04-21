// 1.01 (*) Find the last element of a list.
// Example:
// ?- my_last(X,[a,b,c,d]).
// X = d



var array = ["a", "b", "c", "d"];

function lastElement(input) {
  let item;
  for (item of input) {
  console.log(input)

  }
  return item;
}
console.log(lastElement(array));

// OUTPUT is

// d