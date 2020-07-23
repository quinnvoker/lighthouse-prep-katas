const sumLargestNumbers = function(numArray) {
  let largest;
  let secondLargest;
  for (let num of numArray) {
    if (largest === undefined || num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (secondLargest === undefined || num > secondLargest) {
      secondLargest = num;
    }
  }
  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));