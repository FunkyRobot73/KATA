const organizeInstructors = function(instructors) {
  // Put your solution here

  let iosA =[];
  let webA = [];
  let blockChainA = [];

  const school = {
    iOS: iosA,
    Web: webA,
    Blockchain: blockChainA
  };

    for(let x = 0; x < instructors.length;x++)
      if(instructors[x].course === "iOS") 
        iosA = (iosA.push(instructors[x].name));
    
      for(let y = 0; y < instructors.length;y++) 
        if(instructors[y].course === "Web") 
          webA.push(instructors[y].name);

        for(let z = 0; z < instructors.length;z++)   
          if(instructors[z].course === "Blockchain") 
            blockChainA.push(instructors[z].name); 
  
return school;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
