const multiplicationTable = function(maxValue) {
    // Your code here
    let newArray = "";
    for(let i = 1 ; i <= maxValue ; i++) {
        for(let x = 1; x <= maxValue ; x++) {
            (newArray += (x * i) + " ");
            //console.log(x)
            
        }
        newArray += "\n";
    }
        
    
return newArray
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));
  