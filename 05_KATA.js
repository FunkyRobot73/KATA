const urlEncode = function(text) {
    // Put your solution here
    if(text[0] == " " || text[text.length -1] == " ") {
        text = text.slice(1,text.length)
    }
    for(x of text) {
        text = text.replace(" ", "%20")
    }

   return text 
  };
  
  console.log(urlEncode("Lighthouse Libs"));
  console.log(urlEncode(" Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));
  