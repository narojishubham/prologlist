// 1.14 (*) Duplicate the elements of a list.
// Example:
// ?- dupli([a,b,c,c,d],X).
// X = [a,a,b,b,c,c,c,c,d,d]


newArray = [2, 3, 1, 4];
duplicate=[];

for(let i = 0; i< newArray.length;++i){
  duplicate.push(newArray[i]);
  duplicate.push(newArray[i]);
}
console.log(duplicate)
