/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // Create a map for Roman numeral values
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0; // To store the final result

  // Iterate through the string
  for (let i = 0; i < s.length; i++) {
    // Get the value of the current Roman numeral
    let currentVal = romanValues[s[i]];
    // Get the value of the next Roman numeral (if it exists)
    let nextVal = romanValues[s[i + 1]];

    // If the current value is less than the next value, subtract current value
    if (currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
};

module.exports = { romanToInt };
