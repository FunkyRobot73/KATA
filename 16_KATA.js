const makeCase = function(input, cased) {
  // Put your solution here
if (cased === "camel") {

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

if(cased === "pascal") {
  (input = input.split(' '));   //Splits string into an array whereever there is a space.
  newInput = [];
  for(x of input) {
      (x = x.charAt(0).toUpperCase() + x.slice(1));   //Capitalizes each item in array
      newInput.push(x)            //  PUSHES each item in array into new array.
  }
  newInput = newInput.join("");   //converts array back to string
  return newInput;
}

if (cased === "snake") {

  (input = input.split(' '));   //Splits string into an array whereever there is a space.
  newInput = [input[0]];      //creates new Array with 1 string in array.
  (input.reverse());          // reverses Array
  input.pop();                //  POPS array
  input.reverse();            //  Reverses ARRAY again (To get it back in original order)
  for(x of input) {
      //(x = x.charAt(0).toUpperCase() + x.slice(1));   //Capitalizes each item in array
      newInput.push(x)            //  PUSHES each item in array into new array.
  }
  newInput = newInput.join("_");   //converts array back to string
  return newInput;
    };

    if (cased === "kebab") {

      (input = input.split(' '));   //Splits string into an array whereever there is a space.
      newInput = [input[0]];      //creates new Array with 1 string in array.
      (input.reverse());          // reverses Array
      input.pop();                //  POPS array
      input.reverse();            //  Reverses ARRAY again (To get it back in original order)
      for(x of input) {
          //(x = x.charAt(0).toUpperCase() + x.slice(1));   //Capitalizes each item in array
          newInput.push(x)            //  PUSHES each item in array into new array.
      }
      newInput = newInput.join("-");   //converts array back to string
      return newInput;
        };

        if(cased === "title") {
          (input = input.split(' '));   //Splits string into an array whereever there is a space.
          newInput = [];
          for(x of input) {
              (x = x.charAt(0).toUpperCase() + x.slice(1));   //Capitalizes each item in array
              newInput.push(x)            //  PUSHES each item in array into new array.
          }
          newInput = newInput.join(" ");   //converts array back to string
          return newInput;
        }

        if (cased === "vowel") {

          (input = input.split(''));   //Splits string into an array whereever there is a space.
          newInput = [];
          for(x of input) {
            if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
              (x = x.toUpperCase() + x.slice(1));   //Capitalizes each item in array
               
            } else {
              x = x.toLowerCase() + x.slice(1);
            }
            newInput.push(x) 
              //  PUSHES each item in array into new array.
          }
          newInput = newInput.join("");   //converts array back to string
          return newInput;
            };
//******************************************************************************* */    
            if (cased === "consonant") {

              (input = input.split(''));   //Splits string into an array whereever there is a space.
              newInput = [];
              for(x of input) {
                if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
                  (x = x.toLowerCase() + x.slice(1));   //Capitalizes each item in array
                   
                } else {
                  x = x.toUpperCase() + x.slice(1);
                }
                newInput.push(x) 
              }
              newInput = newInput.join("");   //converts array back to string
              return newInput;
                };
//************************************************************************************
                if (cased[0] === "upper" && cased[1] === "snake") {
                  newInput = [];
                  for(x of input) {
                    if(x === "A"){
                      (x = x.toLowerCase() + x.slice(1));   //Capitalizes each item in array
                       
                    } else {
                      x = x.toUpperCase() + x.slice(1);
                    }
                    newInput.push(x) 

                  }
                  newInput = newInput.join("");   //converts array back to string
                  
                  (newInput = newInput.split(' '));
                  newInput = newInput.join("_")
                  return newInput;
                    };
    

}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("This is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
