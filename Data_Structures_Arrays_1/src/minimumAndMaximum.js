/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
  let results = [];
  let sorted = numbers.sort((a, b) => a - b);

  if (sorted.length >= 1) {
    results.push(sorted[0]);
    results.push(sorted[sorted.length - 1]);
  }
  return results;
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
  if (numbers.length >= 1) {
    let min = numbers[0];
    let max = numbers[0];
    numbers.forEach((number) => {
      if (number < min) {
        min = number;
      }
      if (number > max) {
        max = number;
      }
    });
    return [min, max];
  }
  return [];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
