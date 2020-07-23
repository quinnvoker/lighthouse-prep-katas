/*
  there's probably a more efficient way to accomplish this,
  but I wanted to try and make this able to handle a larger
  array of rules than any of the examples provided
*/

const makeCase = function(input, rules) {
  // ensure string is lowercase before processing
  input = input.toLowerCase();
  if (typeof rules === 'string') {
    return applyRule(input, rules);
  }
  let output = input;
  // highest priority
  for (let rule of rules) {
    switch (rule) {
    case 'camel':
    case 'pascal':
    case 'snake':
    case 'kebab':
    case 'title':
      output = applyRule(output, rule);
      break;
    }
  }
  // second priority
  for (let rule of rules) {
    switch (rule) {
    case 'vowel':
    case 'consonant':
      output = applyRule(output, rule);
      break;
    }
  }
  // third priority
  for (let rule of rules) {
    switch (rule) {
    case 'upper':
    case 'lower':
      output = applyRule(output, rule);
      break;
    }
  }
  return output;
};

const applyRule = function(input, rule) {
  // don't bother iterating over the string if the rule is simple
  if (rule === 'upper') {
    return input.toUpperCase();
  } else if (rule === 'lower') {
    return input.toLowerCase();
  }
  // otherwise build the output one character at a time
  let output = '';
  let capitalizeNext = false;
  for (let i = 0; i < input.length; i++) {
    // capitalise first letter for pascal and title
    if ((rule === 'pascal' || rule === 'title') && output.length === 0 && input[i] !== ' ') {
      output += input[i].toUpperCase();
      continue;
    }
    // determine capitalisation based on current letter and rule
    switch (input[i]) {
    // handle spaces
    case ' ':
    case '-':
    case "_":
      switch (rule) {
      case 'camel':
        if (output.length > 1) {
          capitalizeNext = true;
        }
        break;
      case 'pascal':
        capitalizeNext = true;
        break;
      case 'snake':
        output += '_';
        break;
      case 'kebab':
        output += '-';
        break;
      case 'title':
        capitalizeNext = true;
        output += ' ';
        break;
      default:
        output += ' ';
        break;
      }
      break;
      // handle vowels
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      if (capitalizeNext || rule === 'vowel') {
        output += input[i].toUpperCase();
        capitalizeNext = false;
      } else {
        output += input[i];
      }
      break;
      // handle consonants/everything else
    default:
      if (capitalizeNext || rule === 'consonant') {
        output += input[i].toUpperCase();
        capitalizeNext = false;
      } else {
        output += input[i];
      }
      break;
    }
  }
  return output;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
