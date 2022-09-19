// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */

// khi mà majority element xuất hiện thì độ dài của tập hợp major sẽ > (n-2),
// sau khi sort thì element ở giữa luôn là ptu xuất hiện nhiều nhất
var majorityElement = function (nums) {
	let n = nums.length;
	let sortedNums = nums.sort();
	return sortedNums[Math.floor(n / 2)];
};
majorityElement([1, 2, 1, 1, 2, 1, 2, 1, 3]);
// ok
