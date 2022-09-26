// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index.Otherwise, return -1.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	// for (let i = 0; i < nums.length - 1; i++) {
	// 	if (nums[i] === target) {
	// 		return i;
	// 	} else i++;
	// }
	// return -1
  
	var start = 0;
	var end = nums.length - 1;
	while (start <= end) {
		var mid = start + Math.floor((end - start) / 2);
		if (nums[mid] == target) {
			return mid;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
};
