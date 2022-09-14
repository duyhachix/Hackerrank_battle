// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.(1 từ là 1 chuỗi con gồm các kí tự không giải dấu cách)

// Example 1:

// Input: s = "Hello World"
// Output: 5

// Explanation: The last word is "World" with length 5.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  let n = arr.length;
  return arr[n - 1].length;
};
lengthOfLastWord("Thanh     Duy   ");
// ok
