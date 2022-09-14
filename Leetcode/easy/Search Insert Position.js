// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      return i;
    } else {
      if (nums[i] < target && target < nums[i + 1]) {
        console.log(i + 1);
        return i + 1;
      } else if (target > nums[n - 1]) {
        return n;
      } else if (target < nums[0]) {
        return 0;
      }
    }
  }
};
searchInsert([1, 2, 3, 5, 9], 12);
// // Runtime: 117 ms, faster than 8.19% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 42.3 MB, less than 49.00% of JavaScript online submissions for Search Insert Position.
