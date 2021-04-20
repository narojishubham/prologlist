// 1.21 (*) Insert an element at a given position into a list.
// Example:
// ?- insert_at(alfa,[a,b,c,d],2,L).
// L = [a,alfa,b,c,d]

// const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

// function insert(inputArr, nthPlace, value) {
//   const temp = mode.splitTheList(inputArr, nthPlace);
//   return [...temp.firstpart, value, ...temp.secondPart];
// }
// console.log(insert(arr, 3, "z"));
// console.log(insert(arr, 2, "o"));

const weekdays = ['monday', 'tuesday', 'thursday', 'friday']
Add = (weekdays,pos,value) =>{

weekdays.splice(pos, 0, value);

return(weekdays);
}
console.log(Add(weekdays, 2, 'wednesday'))
console.log(Add(weekdays, 6, 'saturday'))
