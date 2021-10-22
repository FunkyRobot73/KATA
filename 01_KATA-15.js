const sumLargestNumbers = function(data) {
  // Put your solution here
let sorted = data.sort(function(x,y) {
  return x-y;
});
return sorted.slice(-2)
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
