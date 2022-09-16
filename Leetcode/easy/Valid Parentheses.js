// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/*
An input string is valid if:  
  1.Open brackets must be closed by the same type of brackets.
  2.Open brackets must be closed in the correct order.
  3.Every close bracket has a corresponding open bracket of the same type.
*/

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

/* -------------------------------------------------- */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	// create stack to store closing bracket expected
	let stack = [];
	let n = s.length;
	// check each charater in input string...
	for (let i = 0; i < n; i++) {
		// If open parentheses are present, push it to stack...
		if (s[i] == '{') {
			stack.push('}');
		} else if (s[i] == '[') {
			stack.push(']');
		} else if (s[i] == '(') {
			stack.push(')');
		}
		// If a close bracket is found, check that it matches the last stored open bracket
		else if (stack.pop() !== s[i]) {
			return false;
		}
	}
	return !stack.length;
};
isValid('(){}');

// ok
