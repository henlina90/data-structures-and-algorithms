/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  let wordArray = word.toLowerCase().split("");

  let count = {};
  let firstChar = null;

  wordArray.forEach((letter) => {
    count[letter] ? count[letter]++ : (count[letter] = 1);
  });

  for (let char in count) {
    if (count[char] === 1) {
      firstChar = char;
      break;
    }
  }
  return firstChar;
}

module.exports = firstSingleCharacter;
