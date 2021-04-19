// 1.07 (**) Flatten a nested list structure.
// Transform a list, possibly holding lists as elements into a 'flat' list by replacing each list with its elements (recursively).

// Example:
// ?- my_flatten([a, [b, [c, d], e]], X).
// X = [a, b, c, d, e]

// Hint: Use the predefined predicates is_list/1 and append/3

var list1 = [1,2,3,4];
var list2 = [5,6,7,8]

var length = list2.length;

for( var i = 0; i < length; i++)
{
    // console.log(list2[i])
    list1.push(list2[i])
    
}console.log(list1)
console.log(list1.length)