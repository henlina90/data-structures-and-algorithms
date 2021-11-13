/**
 * Return true if some permutation of this word is a palindrome
 * @param {wording} word The word to check
 */
function permutationPalindrome(word) {
  let charMap = new Map();
  for (let i = 0; i < word.length; i++) {
    if (charMap.get(word[i])) {
      charMap.delete(word[i]);
    } else {
      charMap.set(word[i], 1);
    }
  }
  if (
    (word.length % 2 === 0 && charMap.size === 0) ||
    (word.length % 2 === 1 && charMap.size === 1)
  ) {
    return true;
  }
  return false;
}

module.exports = permutationPalindrome;
