/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  // just to remove special char and convert it to lowercase
  s1 = s1.replace(/[^\w]/g, "").toLowerCase();
  s2 = s2.replace(/[^\w]/g, "").toLowerCase();
  if (s1.length !== s2.length) {
    return false;
  }

  let str1 = {};
  let str2 = {};
  /* 
   making of mapObject of both string, containing str1cter as property and 
   count of that str1cter as value 
 */
  for (let i = 0; i < s1.length; i++) {
    str2[s2[i]] = str2[s2[i]] + 1 || 1;
    str1[s1[i]] = str1[s1[i]] + 1 || 1;
  }
  //  checking both CharMap value
  for (let char of s2) {
    if (str2[char] !== str1[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagram;
