/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */

const searchByName = (customers, firstName, start, end) => {
  //if start is not defined consider it 0
  start = start || 0;

  //if end is not defined consider it the lenght of the array
  end = end || array.length;

  if (start > end) {
    return -1;
  }

  // picking index in the middle of the start and end indices; if you haven't found the item, recursively search in either left or right half.
  let index = Math.floor((start + end) / 2);
  let item = array[index];

  console.log(start, end);

  if (item == value) {
    return index;
  } else if (item < value) {
    return searchByName(array, value, index + 1, end);
  } else if (item > value) {
    return searchByName(array, value, start, index - 1);
  }
};

module.exports = searchByName;
