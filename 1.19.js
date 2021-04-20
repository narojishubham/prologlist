// 1.19 (**) Rotate a list N places to the left.
// Examples:
// ?- rotate([a,b,c,d,e,f,g,h],3,X).
// X = [d,e,f,g,h,a,b,c]

// ?- rotate([a,b,c,d,e,f,g,h],-2,X).
// X = [g,h,a,b,c,d,e,f]




const arr = ["a", "b", "c", "d", "e", "f","g","h"];

function splitTheList(arr, givenLength) {
  firstPart = [];
  secondPart = [];
  for (i = 0; i < arr.length; i++) {
    if (i <= givenLength) {
      firstPart.push(arr[i]);
    } else {
      secondPart.push(arr[i]);
    }
  }
  return { firstpart: firstPart, secondPart: secondPart };
}

function rotateLeft(arrRotate, nthPlace) {
  const temp = splitTheList(arrRotate, nthPlace);
  return [temp.secondPart, temp.firstpart];
}
console.log(rotateLeft(arr, 2));