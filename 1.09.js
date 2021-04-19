// 1.09 (**) Pack consecutive duplicates of list elements into sublists.
// If a list contains repeated elements they should be placed in separate sublists.

// Example:
// ?- pack([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// X = [[a,a,a,a],[b],[c,c],[a,a],[d],[e,e,e,e]]

// var arr = [2,2,2,2,1,1,1,5,5,8,7,9];

//     function removeDuplicate(array){
//         var latest = [];
//         var newArray = [];
//         for(var i = 0; i < array.length  ; i++) {
//             if(array[i] === array[i + 1]) {
//                 newArray.push(array[i]);
//             }
//             else
//             {
//                latest.push(array[i]);
//             //    latest.push(newArray);
//             }
//         }
//         console.log(latest);
//         console.log(newArray);


//     }
//     removeDuplicate(arr);


    var array = [ 'a','f','r','r','r','b','b','b','c','c']

const packCon = (input) => {
  let tempArry = [];
  for (i = 0; i < input.length; i++) {
    if (tempArry.length === 0) {
      tempArry.push([input[i]]);
    } else {
      const temp = tempArry[tempArry.length - 1];
      //   console.log(temp);
      if (temp[0] === input[i]) {
        temp.push(input[i]);
      } else {
        tempArry.push([input[i]]);
      }
    }
  }
  return tempArry;
};

console.log(packCon(array));

   