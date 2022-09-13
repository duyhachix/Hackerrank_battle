function findMedian(arr) {
	// Write your code here
	let newArr = arr.sort((a, b) => a - b);
	let length = arr.length;
	console.log(newArr[Math.floor(length / 2)]);
	return newArr[Math.floor(length / 2)];
}
findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9]);
