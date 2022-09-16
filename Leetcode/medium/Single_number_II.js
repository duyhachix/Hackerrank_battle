/*
cho array nums là các số nguyên, array có các phần tử lặp lại 3 lần chỉ trừ 1 phần tử xuát hiện đúng 1 lần
tìm phần tử đó
*/
// dùng sort rồi so sánh ptu hiện tại với 2 phần tử lân cận, đã làm rồi ở phần easy
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


// 