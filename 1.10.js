// 1.10 (*) Run-length encoding of a list.
// Use the result of problem 1.09 to implement the so-called run-length encoding data compression method. Consecutive duplicates of elements are encoded as terms [N,E] where N is the number of duplicates of the element E.

// Example:
// ?- encode([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// X = [[4,a],[1,b],[2,c],[2,a],[1,d],[4,e]]



// var array = [ 'a','f','r','r','r','b','b','b','c','c']

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

