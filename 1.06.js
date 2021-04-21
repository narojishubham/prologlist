// 1.06 (*) Find out whether a list is a palindrome.
// A palindrome can be read forward or backward; e.g. [x,a,m,a,x].


function palindrome(str) {
  
    let size = str.length;
    for (let i = 0; i < size/2; i++) {
      if (str[i] !== str[size - 1 - i]) {
          console.log('false') ;
      }
    }
    return true;
   }
   console.log(palindrome([1, 2, 2, 1]))