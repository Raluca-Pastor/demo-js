/* Create a function that returns if a word (string) is a palindrome.

input     | output
''        | true
'x'       | true
'maoam'   | true
'mm'      | true
'yoyo'    | false
'ab'      | false */

const { log } = require("../utils/logger");

const isPalindrome = (word) => {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] != word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const isPalindrome2 = (word) => {
  log(word);
  const reveredWord = word.split("").reverse().join("");
  log(reveredWord);
  return word == reveredWord;
};

module.exports = { isPalindrome, isPalindrome2 };
