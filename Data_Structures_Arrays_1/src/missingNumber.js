/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
  let n = numbers.length + 1;

  for (let i = 1; i <= n; i++) {
    let found = false;
    let j = 0;

    while (!found && j < numbers.length) {
      if (i === numbers[j]) {
        found = true;
      }
      j++;
    }
    if (!found) {
      return i;
    }
  }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
  let n = numbers.length + 1;
  let fullSum = (n * (n + 1)) / 2;
  let sum;
  let sm = numbers.reduce((a, b) => a + b, 0);
  sum = fullSum - sm;
  return sum;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
