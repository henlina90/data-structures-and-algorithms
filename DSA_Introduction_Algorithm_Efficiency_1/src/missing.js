/**
 The missing number problem
 Implement algorithm 1 here
*/
const missing1 = (a) => {
  let n = a.length + 1;

  for (let i = 1; i <= n; i++) {
    let found = false;
    let j = 0;

    while (!found && j < a.length) {
      if (i === a[j]) {
        found = true;
      }
      j++;
    }
    if (!found) {
      return i;
    }
  }
};

/**
The missing number problem
Implement algorithm 2 here
*/
const missing2 = (a) => {
  let n = a.length + 1;
  let fullSum = (n * (n + 1)) / 2;
  let sum;
  let sm = a.reduce((a, b) => a + b, 0);
  sum = fullSum - sm;
  return sum;
};

export { missing1, missing2 };
