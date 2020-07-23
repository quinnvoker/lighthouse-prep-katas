const conditionalSum = function(values, condition) {
  let sum = 0;
  for (let value of values) {
    if (condition === "even" && value % 2 === 0) {
      sum += value;
    } else if (condition === "odd" && value % 2 !== 0) {
      sum += value;
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));