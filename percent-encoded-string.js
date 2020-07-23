const urlEncode = function(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (i > 0 && i < text.length - 1) {
        result += "%20";
      }
    } else {
      result += text[i];
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));