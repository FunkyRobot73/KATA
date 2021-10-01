const camelCase = function(input) {
    // Your code here

    (input = input.split(' '));   //Splits string into an array whereever there is a space.
    newInput = [input[0]];      //creates new Array with 1 string in array.
    (input.reverse());          // reverses Array
    input.pop();                //  POPS array
    input.reverse();            //  Reverses ARRAY again (To get it back in original order)
    for(x of input) {
        (x = x.charAt(0).toUpperCase() + x.slice(1));   //Capitalizes each item in array
        newInput.push(x)            //  PUSHES each item in array into new array.
    }
    newInput = newInput.join("");   //converts array back to string
    return newInput;
     };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));
  