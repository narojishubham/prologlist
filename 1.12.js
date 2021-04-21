// 1.12 (**) Decode a run-length encoded list.
// Given a run-length code list generated as specified in problem 1.11. Construct its uncompressed version.

const exampleArr= [[4,'a'],[2,'b'],[2,'c'],[2,'a'],[4,'e']]


const decode=(inputArray)=>{
return inputArray.map((item)=>{
for(i=0;i<=item[0];i++){
console.log(1)
return item[1]




}

})



}

console.log(decode(exampleArr))