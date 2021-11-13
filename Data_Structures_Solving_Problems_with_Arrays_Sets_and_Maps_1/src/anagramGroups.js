/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  let anagrams = {};
  let collectedAnagrams = [];

  // iterate through words
  for (let word of words) {
    // use the anagrams hash to find & store arrays of anagrams

    // alphabetize letters
    let letters = word.split("").sort().join("");

    // create hash key-value pair for alphabetized letters of word if it does not exist
    anagrams[letters] = anagrams[letters] || [];

    // add word to value of the key which matches its letters
    anagrams[letters].push(word);
  }

  //push those arrays into the collectedAnagrams array

  // iterate through anagrams hash keys
  for (let key in anagrams) {
    // add their values as subarrays of the collectedAnagrams array
    collectedAnagrams.push(anagrams[key]);
  }

  // return the array of arrays
  return collectedAnagrams;
}

module.exports = anagramGroups;
