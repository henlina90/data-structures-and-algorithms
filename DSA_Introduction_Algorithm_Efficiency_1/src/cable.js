/**
 The cable problem
 Implement algorithm 1 here
*/
function cable1(currentLength, requiredLength, saleLength) {
  let count = 0;
  let i = currentLength;

  while (i < requiredLength) {
    i += saleLength;
    count++;
  }
  return count;
}

/**
 The cable problem
 Implement algorithm 2 here
*/
function cable2(currentLength, requiredLength, saleLength) {
  let distance = requiredLength - currentLength;
  let total = Math.round(distance / saleLength);
  return total;
}

export { cable1, cable2 };
