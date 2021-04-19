// Eliminate consecutive duplicates of list elements.
// If a list contains repeated elements they should be replaced with a single copy of the element. The order of the elements should not be changed.

// Example:
// ?- compress([a,a,a,a,b,c,c,a,a,d,e,e,e,e],X).
// X = [a,b,c,a,d,e]



var arr = [2,2,1,1,5,5,8,7,9];

    function removeDuplicate(array){

        var newArray = [];
        newArray.push(array[0]);
    array.map((item,index)=>{
        
        if(index < array.length -1 )
        {
if(item != array[index + 1]) {
           newArray.push(array[index + 1]);
         }     
        }
    })
        // for(var i = 0; i < array.length -1; i++) {
        //     if(array[i] != array[i + 1]) {
        //         newArray.push(array[i + 1]);
        //     }
        // }
        console.log(newArray);
    }
    removeDuplicate(arr);