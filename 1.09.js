// 1.09 (**) Pack consecutive duplicates of list elements into sublists.
// If a list contains repeated elements they should be placed in separate sublists.

// Example:
// ?- pack([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// X = [[a,a,a,a],[b],[c,c],[a,a],[d],[e,e,e,e]]


    var array = [ 'a','f','r','r','r','b','b','b','c','c']

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

console.log(sublists(array));

