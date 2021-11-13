/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */
const searchByEmail = (email, customers) => {
  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    if (customer.email === email) {
      return i;
    }
  }
  return -1;
};

module.exports = searchByEmail;
