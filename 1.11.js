// 1.11 (*) Modified run-length encoding.
// Modify the result of problem 1.10 in such a way that if an element has no duplicates it is simply copied into the result list. Only elements with duplicates are transferred as [N,E] terms.

// Example:
// ?- encode_modified([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// X = [[4,a],b,[2,c],[2,a],d,[4,e]]

const sublists = (input) => {
  var tempArray = [];
  for (i = 0; i < input.length; i++) {
    if (tempArray.length === 0) 
    {
      tempArray.push([input[i]]);
    } 
    else {
      var temp = tempArray[tempArray.length - 1];
      if (temp[0] === input[i]) 
      {
        temp.push(input[i]);
      } 
      else
      {
        tempArray.push([input[i]]);
      }
    }
  }
  return tempArray;
};

const  arrayOne = ['a','a','a','a','b','c','c','a','a','d','e','e','e','e']
function encode(arr) {
  return sublists(arr).map((item)=>{
    return [item.length,item[0]]
  })
}
console.log(encode(arrayOne))

const  arrayTwo = ['a','a','a','a','b','c','c','a','a','d','e','e','e','e']
 function single (array){
return encode (array).map((item) =>{
  console.log(item,'item')
  return item[0] === 1 ? item[1] : item

 })
};
console.log(single(arrayTwo))

