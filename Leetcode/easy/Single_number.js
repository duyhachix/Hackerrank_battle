/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
  */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution1: single element is the elemenet appear once and the only one in the array
// -> indexOf = lastIndexOf

// var singleNumber = function (nums) {
// 	let result = nums.filter(
// 		(item) => nums.indexOf(item) === nums.lastIndexOf(item)
// 	);
// 	return result;
// };
// singleNumber([1, 2, 3, 2, 1]);
// --> cách phía trên hơi ngu faster than 5% people submitted

/* SOlution2: lặp xét từng phần tử trong mảng, rồi lại lặp đối chiếu với từng phần tử của chính mảng đó, 
 nếu phần tử nào mà match thì tăng bộ đếm trùng lên + 1, 
 nếu lặp xong cả vòng rồi mà bộ đếm = 1 thì phần tử đó là thứ cần tìm
*/
var singleNumber = function (nums) {
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		let counter = 0;
		for (let j = 0; j < n; j++) {
			if (nums[i] === nums[j]) {
				counter++;
			}
		}
		if (counter === 1) {
			return nums[i];
		}
	}
};
singleNumber([1, 2, 3, 2, 1]);
//  faster 11%

// them 1 cách đi
/*
sắp xếp mảng tăng/giảm dần ko quan trọng
sau khi sắp xếp thì so sánh ptu hiện tại với mỗi phần tử lân cận xem nó có sai hay không -> nếu cả 2 lần so sánh đó sai thì return ra phần tử hiện tại
*/
var singleNumber = function (nums) {
	let sortedArr = nums.sort();
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		if (
			sortedArr[i] !== sortedArr[i - 1] &&
			sortedArr[i] !== sortedArr[i + 1]
		) {
			return sortedArr[i];
		}
	}
};
