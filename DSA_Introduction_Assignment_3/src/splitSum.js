/**
 * Write a function named splitSum1 that implements algorithm 1 here
 */

// Func accepts tours - an array of group sizes
const splitSum1 = (tours) => {
  // Calc the sum of all nums in the tours arr & assign it to a var named total
  let total = 0;
  for (const tour of tours) {
    total += tour;
  }

  let preSum = 0; // Initialize a var named preSum to the value 0
  let postSum = total; // Initialize a var named postSum to the value of total
  let smallest = Infinity; // Initialize a var named smallest to the largest possible number

  for (let i = 0; i < tours.length; i++) {
    preSum = preSum + tours[i]; // Set preSum to the sum of preSum and tours[i]
    postSum = postSum - tours[i]; // Set postSum to postSum - tours[i]
    let diff = Math.abs(preSum - postSum); // Find the absolute difference between preSum & postSum

    // If the difference is less than smallest
    if (diff < smallest) {
      // Then set smallest to the difference
      smallest = diff;
    }
  }
  return smallest;
};

/**
 * Write a function named splitSum2 that implements algorithm 2 here
 */

// Func accepts tours - an array of group sizes
const splitSum2 = (tours) => {
  // Initialize a variable named smallest to the largest posible number
  let smallest = Infinity;

  // For k = 0 to the length of the tours array - 1 do:
  for (let i = 0; i < tours.length - 1; i++) {
    // Calc the sum of nums from index 0 to index i of tours AND assign to a variable named preSum
    let preSum = tours.slice(0, i + 1).reduce((acc, tour) => acc + tour, 0);
    // Calc the sum of the nums from index i + 1 to the end of tours AND assign to a var named postSum
    let postSum = tours.slice(i + 1).reduce((acc, tour) => acc + tour, 0);
    // Find the absolute difference between preSum & postSum
    let diff = Math.abs(preSum - postSum);
    // If the difference is less than smallest then
    if (diff < smallest) {
      // Set smallest to the difference
      smallest = diff;
    }
  }
  return smallest;
};

module.exports = { splitSum1, splitSum2 };
