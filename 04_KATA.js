const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longestName = instructors[0].name;   //Start off assuming the first name is the longest... 
  let longestNameIndex = 0;  //Longest index will be at least 0

  for(let x = 0;  x < instructors.length; x++) {  //we are gonna loop through the array
    if(instructors[x].name.length > longestName.length) {  //grab name longer than 1st name in array (if)
      longestName = (instructors[x].name);  //add that name to variable
      longestNameIndex = x;  //add that index to variable
    }

  }
  //console.log(instructors[x])
  return instructors[longestNameIndex];   
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

