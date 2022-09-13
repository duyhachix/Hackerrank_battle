function processData(input) {
	//Enter your code here
	input = input.slice(4, 4 + input[2] - 1).split(' ');
	let n = input.length;
	let minToMax = input.sort((a, b) => a - b);
	let midToEndArr = minToMax.slice(Math.floor(n / 2));
	let startToMidArr = minToMax.slice(0, Math.floor(n / 2));
	let sortMidToEnd = midToEndArr.sort((a, b) => b - a);
	let result = startToMidArr.concat(sortMidToEnd);
	console.log(result.join(' '));
}
processData([2, 3, 5, 1, 4, 45, 12, 67]);
// ok
