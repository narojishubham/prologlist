// 1.02 (*) Find the last but one element of a list.
// (de: zweitletztes Element, fr: avant-dernier élément)


var array = [2,4,5,3,6,7,9];

// function secondlast (array) {

// var lastNumber = array.length

// lastNumber -= 2;
// console.log(lastNumber)
// var value = array[lastNumber]
// // console.log(value)
// return value
// }
// // secondlast(array)
// console.log(secondlast(array))


// var array = ["a", "b", "c", "d"];
// Find the last but one element of a list.

function secondlElement(input) {
  let item;
  for (item in input) {
  }
  return input[item - 1];
}
console.log(secondlElement(array));