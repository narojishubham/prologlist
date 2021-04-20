// 1.23 (**) Extract a given number of randomly selected elements from a list.
// The selected items shall be put into a result list.
// Example:
// ?- rnd_select([a,b,c,d,e,f,g,h],3,L).
// L = [e,d,a]


const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

function selectRandom(arr, numberOfElement) {
  extracted = [];
  for (i = 0; i < numberOfElement; i++) {
    extracted.push(arr[Math.floor(Math.random() * arr.length)]);
  }

  //   return Math.floor(Math.random() * arr.length);
  return extracted;
}
console.log(selectRandom(arr, 4));