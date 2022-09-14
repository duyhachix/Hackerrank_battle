/**
 * @param {number}
 * @return {boolean}
 */

// chuyen x ve string
// tao 1 string moi theo theo reversed order
// so sanh 2 string
var isPalindrome = function (x) {
	let numText = '';
	numText = numText + x;
	let bag = '';
	for (let i = numText.length - 1; i >= 0; i--) {
		bag = bag + numText[i];
	}
	return bag == numText ? true : false;
};
//done
