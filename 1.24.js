// 1.24 (*) Lotto: Draw N different random numbers from the set 1..M.
// The selected numbers shall be put into a result list.
// Example:
// ?- lotto(6,49,L).
// L = [23,1,17,33,21,37]

function random (length,num){
var arr = [];
while(arr.length < length){
    var r = Math.floor(Math.random() * num) ;
    if(arr.indexOf(r) === -1) arr.push(r);
}
return arr
}
console.log(random(4,50));

