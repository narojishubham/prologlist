// 1.18 (**) Extract a slice from a list.
// Given two indices, I and K, the slice is the list containing the elements between the I'th and K'th element of the original list (both limits included). Start counting the elements with 1.

// Example:
// ?- slice([a,b,c,d,e,f,g,h,i,k],3,7,L).
//  L = [c,d,e,f,g]

const array = ['a','b','c','d','e','f','g']


slice = (array, ith,kth) =>
// function slice(array,ith,kth)
{
    newArray = []
    for(i= ith; i<=kth; i++)
    {
        newArray.push(array[i]);
    }
    return newArray
}

console.log(slice(array,2,4))

