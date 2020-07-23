const multiplicationTable = function(maxValue) {
  let output = "";
  for (let y = 1; y <= maxValue; y++) {
    for (let x = 1; x <= maxValue; x++) {
      output += x === maxValue ? y * x : (y * x) + " ";
    }
    output += "\n";
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));