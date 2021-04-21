// 1.25 (*) Generate a random permutation of the elements of a list.
// Example:
// ?- rnd_permu([a,b,c,d,e,f],L).
// L = [b,a,d,c,e,f]

let newArray = []
const array1 = ["a", "b", "c", "d","e","f"]
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
console.log(shuffleArray(array1))


