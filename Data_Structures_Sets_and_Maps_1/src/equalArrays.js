/**
 * return true if two arrays are equal, false otherwise
 */
const isEqual = (a1, a2) => {
  if (!Array.isArray(a1) || !Array.isArray(a2) || a1.length !== a2.length) {
    return false;
  }

  // .concat() to not mutate arguments
  const arr1 = a1.concat().sort();
  const arr2 = a2.concat().sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = isEqual;
