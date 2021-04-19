// 1.10 (*) Run-length encoding of a list.
// Use the result of problem 1.09 to implement the so-called run-length encoding data compression method. Consecutive duplicates of elements are encoded as terms [N,E] where N is the number of duplicates of the element E.

// Example:
// ?- encode([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// X = [[4,a],[1,b],[2,c],[2,a],[1,d],[4,e]]

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
      console.log(encode += count, 'checking the encode')

    }

    return encode
  }
 var encoded = encode('eeegggeerdssc')
 console.log(encoded)