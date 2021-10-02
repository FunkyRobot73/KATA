const squareCode = function(message) {
  // Put your solution here
  let rows = [];
  let output = [];
  let columnsNum = message.replace(/ /g,"");
// remove the space
let noSpaces = Math.ceil(Math.sqrt(columnsNum.length));
// calculate the number of noSpaces total
columnsNum = columnsNum.split("");

for (let x = 0; x < columnsNum.length; x++) {
  rows.push(columnsNum[x]);
    if ((x + 1) % noSpaces === 0 && (x + 1) !== columnsNum.length) 
      rows.push(" ");
};
rows = rows.join("");

for (let i = 0; i < noSpaces; i++) {
  output += "\n" + rows[i];
    for (let j = 0; j < rows.length; j++) {
  
if (rows[j - i - 1] === " ") {
  output += rows[j];
      };

    };

  };
return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
