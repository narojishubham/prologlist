// 1.11 (*) Modified run-length encoding.
// Modify the result of problem 1.10 in such a way that if an element has no duplicates it is simply copied into the result list. Only elements with duplicates are transferred as [N,E] terms.

// Example:
// ?- encode_modified([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// X = [[4,a],b,[2,c],[2,a],d,[4,e]]

function encode(string) {
    if (!string) return '';
    let encode = '';

    for (let i = 0; i < string.length; i++) {
      let count = 1;
      for (let j = i; j < string.length; j++) {
        if (string[i] !== string[j+1]) break;
        count++;
        i++;
      }
      encode += count == 1 ? string[i] : count + string[i];
    //   console.log(encode += count, 'checking the encode')

    }

    return encode
  }
 var encoded = encode('eeegggeerdssc')
 console.log(encoded)