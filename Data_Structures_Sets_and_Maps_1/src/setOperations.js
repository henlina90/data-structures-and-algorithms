/**
 * return the union of two sets
 */
const union = (s1, s2) => {
  let results;
  if (s1.size <= s2.size) {
    results = new Set(s2);

    for (let item of s1) {
      results.add(item);
    }
  } else {
    results = new Set(s1);

    for (let item of s2) {
      results.add(item);
    }
  }
  return results;
};

/**
 * return the intersection of two sets
 */
const intersect = (s1, s2) => {
  let results = new Set();
  for (let item of s1) {
    if (s2.has(item)) {
      results.add(item);
    }
  }
  return results;
};

/**
 * return the difference of two sets
 */
const difference = (s1, s2) => {
  let results = new Set(s1);

  for (let item of s1) {
    if (s2.has(item)) {
      results.delete(item);
    }
  }
  return results;
};

module.exports = { union, intersect, difference };
