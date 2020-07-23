const numberOfVowels = function(data) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      count++;
      break;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));