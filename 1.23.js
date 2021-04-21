// 1.23 (**) Extract a given number of randomly selected elements from a list.
// The selected items shall be put into a result list.
// Example:
// ?- rnd_select([a,b,c,d,e,f,g,h],3,L).
// L = [e,d,a]


const array = ["a", "b", "c", "d", "e", "f", "g", "h"];

function random(arr, numberOfElement) {
  extracted = [];
  for (let i = 0; i < numberOfElement; i++) {
    extracted.push(arr[Math.floor(Math.random() * arr.length)]);
  }

  return extracted;
}
console.log(random(array, 4));