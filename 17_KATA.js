 const urlDecode = function(text) {
  
  let textArray = [text]
  let textArray2 = [];

  textArray = textArray[0].split("&");
  //console.log(textArray);
  for(let x of textArray) 
    textArray2.push(x.replace("&", " "));
  console.log(textArray2);
textArray = []

  for(let x of textArray2) 
    textArray.push(x.replace("=", ":"));
    
  textArray2 = [];
  for(let x of textArray) 
    textArray2.push(x.replace("=", ":"));
  
  textArray = [];
  for(let x of textArray2) 
    textArray.push(x.replace("%20", " "));
  
  textArray2 = [];
  for(let x of textArray) 
    textArray2.push(x.replace("%20", " "));
  
  textArray = [];
textArray = textArray2[0].split(":")
objUrl = {[textArray[0]]:textArray[1]}; // same as var person = {"name" : "John"}

return objUrl;
};



console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


