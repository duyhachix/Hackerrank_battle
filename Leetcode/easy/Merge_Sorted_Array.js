/**
 * @param {number[]} nums1  increasing order
 * @param {number} m
 * @param {number[]} nums2  increasing order
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//
var merge = function (nums1, m, nums2, n) {
	let length2 = nums2.length;
	for (let i = length2 - 1; i >= 0; i--) {
		nums1.unshift(nums2[i]);
		nums1.pop();
	}
	nums1.sort((a, b) => a - b);
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 2);
// ok
