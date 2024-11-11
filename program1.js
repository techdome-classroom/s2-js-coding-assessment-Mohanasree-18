/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Stack to keep track of opening brackets
  const stack = [];

  // Map for matching parentheses
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    // If it's a closing bracket, check for matching opening bracket
    if (bracketMap[currentChar]) {
      // If stack is empty or top of stack does not match the expected opening bracket
      if (stack.pop() !== bracketMap[currentChar]) {
        return false;
      }
    } else {
      // If it's an opening bracket, push it to the stack
      stack.push(currentChar);
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0;
};

module.exports = { isValid };
