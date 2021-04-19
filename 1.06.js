// 1.06 (*) Find out whether a list is a palindrome.
// A palindrome can be read forward or backward; e.g. [x,a,m,a,x].


function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re,'');
    var size = str.length;
    for (var i = 0; i < size/2; i++) {
      if (str[i] !== str[size - 1 - i]) {
          console.log('false') ;
      }
    }
    return true;
   }
   var output = palindrome("A man, a plan, a canal. Panama");
   console.log(output)