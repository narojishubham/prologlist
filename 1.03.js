// 1.03 (*) Find the K'th element of a list.
// The first element in the list is number 1.
// Example:
// ?- element_at(X,[a,b,c,d,e],3).
// X = c

var array1 = [2,4,5,3,6,7,9];

var size = array1.length
size = size -1;

function element(array,kth)  {
for(var i = 0; i < size; i++)
{
    if( i=== kth)
    {
        return array[i]
    }
}
}
console.log(element(array1,5))
