// An array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
/**
 * @param {number[]} arr
 * @return {number}
 */

var peakIndexInMountainArray = function (arr) {
	// dung spread operator để upack all the value from the array
	let maxOfAll = Math.max(...arr);
	return arr.indexOf(maxOfAll);
};
peakIndexInMountainArray([0, 1, 2, 6, 3, 1]);
