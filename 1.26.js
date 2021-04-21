// 1.26 (**) Generate the combinations of K distinct objects chosen from the N elements of a list
// In how many ways can a committee of 3 be chosen from a group of 12 people? We all know that there are C(12,3) = 220 possibilities (C(N,K) denotes the well-known binomial coefficients). For pure mathematicians, this result may be great. But we want to really generate all the possibilities (via backtracking).

// Example:
// ?- combination(3,[a,b,c,d,e,f],L).
// L = [a,b,c] ;
// L = [a,b,d] ;
// L = [a,b,e] ;

const List= ["a", "b", "c", "d"];


function combinations(List,num) {
 
  if (num == List.length) {
    return [List];
  }

  if (num == 1) {
    const combs = [];
    for (var i = 0; i < List.length; i++) {
      combs.push([List[i]]);
    }
    return combs;
  }
  const combs = [];
  for (let i = 0; i < List.length - num + 1; i++) {
    const head = List.slice(i, i + 1);
    // console.log(head,'header')
    const tailcombs = combinations(List.slice(i + 1), num - 1);
    // console.log(tailcombs,'tailcombs')
    for (let j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

console.log(combinations(List, 3));