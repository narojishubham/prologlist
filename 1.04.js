// 1.04 (*) Find the number of elements of a list.

const arrayList = ['Morjim','Panjim','Mapusa','Vasco','Verna','Madgao']

function numberOfElement(input) {
  let count = 0;
  for (i = 0; i < input.length; i++) 
  {
    count++;
  }
  return count;
}
console.log(numberOfElement(arrayList));
