/*
cho array nums là các số nguyên, array có các phần tử lặp lại đúng 2 lần, chỉ trừ có 2 phần tử xuất hiện 1 lần
tìm 2 phần tử xuất hiện chỉ 1 lần đó, return mảng chứa 2 phần tử đó theo thứ tự nào cx dc
*/

var singleNumber = function (nums) {
	let n = nums.length;
	let sortedArr = nums.sort();
	let newArr = [];
	if (n === 2) return nums;
	for (let i = 0; i < n; i++) {
		if (
			sortedArr[i] !== sortedArr[i + 1] &&
			sortedArr[i] !== sortedArr[i - 1]

			// [sortedArr[i - 1], sortedArr[i + 1]].every(
			// 	(el) => el !== sortedArr[i]
			// )
		) {
			newArr.push(sortedArr[i]);
		}
	}
	console.log(newArr);
	return newArr;
};
singleNumber([1, 2, 1, 3, 2, 5]);
// done
