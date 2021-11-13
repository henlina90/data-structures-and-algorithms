/**
 * Write a function named gcd1 that implements algorithm 1 here
 */

const gcd1 = (a, b) => {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
};

/**
 * Write a function named gcd2 that implements algorithm 2 here
 */

const gcd2 = (a, b) => {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }

  let divA = [1, a];
  let divB = [1, b];
  let common = [];

  for (let i = 2; i < a - 1; i++) {
    if (a % i === 0) {
      divA.push(i);
    }
  }

  for (let i = 2; i < b - 1; i++) {
    if (b % i === 0) {
      divB.push(i);
    }
  }

  divA.forEach((n) => {
    if (divB.includes(n)) {
      common.push(n);
    }
  });

  let largest = Number.MIN_VALUE;

  common.forEach((n) => {
    if (n > largest) {
      largest = n;
    }
  });
  return largest;
};

module.exports = { gcd1, gcd2 };
