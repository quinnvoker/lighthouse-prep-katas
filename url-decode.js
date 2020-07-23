const urlDecode = function(text) {
  let generatedObject = {};
  let properties = text.split('&');
  for (let property of properties) {
    let pair = property.split('=');
    let words = pair[1].split('%20');
    let value = '';
    for (let word of words) {
      if (value.length > 0) {
        value += ' ';
      }
      value += word;
    }
    generatedObject[pair[0]] = value;
  }
  return generatedObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
