// 1.07 (**) Flatten a nested list structure.
// Transform a list, possibly holding lists as elements into a 'flat' list by replacing each list with its elements (recursively).

// Example:
// ?- my_flatten([a, [b, [c, d], e]], X).
// X = [a, b, c, d, e]

// Hint: Use the predefined predicates is_list/1 and append/3

const list1 = [0, 1, 2, [3, 4]];
console.log(list1.flat());
const list2 = [0, [1, 2, [3, 4]]];
console.log(list2.flat(2));