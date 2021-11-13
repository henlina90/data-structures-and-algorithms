# Tasks

## Evaluating postfix expressions

Recall that an arithmetic expression may be written in postfix notation. The following are a few examples.

| Infix              | Postfix        |
| ------------------ | -------------- |
| (2 + 3) \* 4       | 2 3 + 4 \*     |
| (2 + (4 - 5) \* 3) | 2 4 5 - 3 \* + |
| 8 / (6 + 2)        | 8 6 2 + /      |

Given an arithmetic expression in postfix form, evaluate the expression and return the final value.

Assume:

- all operands a single digit numbers
- only the operators +, -, / and \* will be used
- all expressions are valid, no need to validate them
- only valid operations will be provided. That is no need to check for division by zero and other arithmetic anomalies.

Implement your solution in the file named `src/postfix.js`.

## Generate binary numbers

Given a number `max`, write an algorithm that generates all binary integers from 1 to `max`.

Examples:

```
Input: max = 2
Output: ["1", "10"]

Input: max = 5
Output: ["1", "10", "11", "100", "101"]
```

Implement your solution in the file named `src/binary.js`.

## Matching Brackets

Arithmetic expressions may contain parentheses and other types of brackets for clarification. For example the following expression is valid:

(a + b) \* c

But the following expression is not:

((a + b) \* c

Write an algorithm that accepts an expression as a string and recognize 3 different types of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should return false.

Implement your solution in the file named `src/brackets.js`.
