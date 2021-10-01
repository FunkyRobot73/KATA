const squareCode = function(message) {
  // Put your solution here
  message = message.replace(/ /g, "")
  let count = (Math.ceil(Math.sqrt(message.length)))
  array = (message.slice(0,count));
  
  //console.log(array);
  if(message.length > 0) {

    // array.push(message.slice(0,count))
    // console.log(message);
    // console.log(array)
  }

  return array
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
