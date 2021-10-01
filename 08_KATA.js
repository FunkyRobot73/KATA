const repeatNumbers = function(data) {
    // Put your solution here
        let concatNumb = "";
        
        for(let x of data) {
            
            for(let i = 0; i < x[1] ; i++) {
                concatNumb += "" + x[0];
                //console.log(concatNumb)
            }
            concatNumb += ","
        }
        return concatNumb.slice(0,-1)
        };

  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 5]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
  