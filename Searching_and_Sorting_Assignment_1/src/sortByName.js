const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

function compare(left, right) {
  if (left < right) {
    return -1;
  }
  if (left > right) {
    return 1;
  }
  if (left === right) {
    return 0;
  }
}

const nameSort = (customers) => {
  let customerNames = customers.map(
    (customer) => customer.lastName + customer.firstName
  );

  let sorted = sort(compare, customerNames);
  customers = [];

  sorted.forEach((customerName) => {
    let lastName = customerName.slice(0, 1);
    let firstName = customerName.slice(1, customerName.length);

    let newObj = { firstName, lastName };

    customers.push(newObj);
  });

  return customers;
};

module.exports = nameSort;
