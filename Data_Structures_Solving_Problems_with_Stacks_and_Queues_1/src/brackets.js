const Stack = require("./lib/stack");

// Use algorithm to determine if a given expression contained matching parentheses
// Extend the algorithm to recognize 3 different types of brackets: (), [], and {}.
// These must be correctly nested; "([)]" is incorrect, and should return false;
const match = (expression) => {
  const stack = new Stack(); // Initialize a new empty stack

  // Start a loop to iterate through each char in the expression
  for (let i = 0, limit = expression.length; i < limit; i++) {
    let char = expression[i];

    // 3 different types of brackets: (), [], {}
    const bracketz = {
      "(": ")",
      "{": "}",
      "[": "]",
    };

    // If current char is an open bracket then push closing bracket into the stack
    if ("({[".includes(char)) {
      stack.push(bracketz[char]);
      // else
      // If current char is close bracket
      // If the stack is not empty then pop one item off the stack
    } else {
      if (")}]".includes(char)) {
        if (stack.top?.value === char) {
          stack.pop();
        } else {
          return false; // else return false
        }
      }
    }
  }
  return !stack.top; // If the stack is empty then return true, else return false
};

module.exports = match;
