// 1.03 (*) Find the K'th element of a list.
// The first element in the list is number 1.
// Example:
// ?- element_at(X,[a,b,c,d,e],3).
// X = c

var array = [2,4,5,3,6,7,9];

var size = array.length
size = size -1;

var kth = 5
for(var i = 0; i < size; i++)
{
    if( array[i] === kth)
    {
        console.log('The number is present')
    }
    else{
        console.log('Number is not present')
    }
}