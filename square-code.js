const squareCode = function(message) {
  message = removeSpaces(message);
  const rowLength = Math.ceil(Math.sqrt(message.length));
  let cutMessage = [];
  for (let i = 0; i < message.length; i += rowLength) {
    cutMessage.push(message.slice(i, i + rowLength));
  }
  let codedMessage = '';
  for (let i = 0; i < rowLength; i++) {
    for (let slice of cutMessage) {
      if (slice[i]) {
        codedMessage += slice[i];
      }
    }
    codedMessage += ' ';
  }
  return codedMessage;
};

const removeSpaces = function(text) {
  return text.split(' ').join('');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
