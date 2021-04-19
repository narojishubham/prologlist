// 1.14 (*) Duplicate the elements of a list.
// Example:
// ?- dupli([a,b,c,c,d],X).
// X = [a,a,b,b,c,c,c,c,d,d]

// var numbers = [1,2,3,4,5]

// function duplicate(arr)
// {
//     arr.map((item,index)=>{
//         for(var i= 0; i< 4; i++)
//         {

//         }
//     })
// }
newArray = [2, 3, 1, 4];
duplicate=[];

for(var i = 0; i< newArray.length;++i){
  duplicate.push(newArray[i]);
  duplicate.push(newArray[i]);
}
console.log(duplicate)