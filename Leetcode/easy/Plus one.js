// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	let n = digits.length - 1;
	while (n >= 0) {
		if (digits[n] < 9) {
			digits[n]++;
			return digits;
		} else {
			digits[n] = 0;
			n--;
		}
	}
	digits.unshift(1);
	return digits;
};
// ok
