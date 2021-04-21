// (**) Drop every N'th element from a list.
// Example:
// ?- drop([a,b,c,d,e,f,g,h,i,k],3,X).
// X = [a,b,d,e,g,h,k]

var array = [1,2,3,4,5,6,7,8,9];

function dropNthElement(array, nth) {
  return array.filter((carVal, index) => {
    if(index = 0){
return carVal
    }else{return index % nth != 0;}
    
  });
}
console.log(dropNthElement(array,2));