/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
const reverse = (text) => {
  if (text.length < 2) {
  return text;
  }
  return reverse(text.substring(1)) + text.charAt(0);
}

module.exports = reverse;
