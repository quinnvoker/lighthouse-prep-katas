const calculateChange = function(total, cash) {
  let changeTypes = [
    {name: 'twentyDollar', value: 2000, count: 0},
    {name: 'tenDollar', value: 1000, count: 0},
    {name: 'fiveDollar', value: 500, count: 0},
    {name: 'twoDollar', value: 200, count: 0},
    {name: 'oneDollar', value: 100, count: 0},
    {name: 'quarter', value: 25, count: 0},
    {name: 'dime', value: 10, count: 0},
    {name: 'nickel', value: 5, count: 0},
    {name: 'penny', value: 1, count: 0}
  ];
  let changeNeeded = cash - total;
  let changeGiven = {};
  for (let denomination of changeTypes) {
    while (changeNeeded >= denomination.value) {
      changeNeeded -= denomination.value;
      denomination.count++;
    }
    if (denomination.count > 0) {
      changeGiven[denomination.name] = denomination.count;
    }
  }
  return changeGiven;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
