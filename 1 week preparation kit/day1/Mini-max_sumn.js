var nElementSum = function (arr, n) {
	let minToMax = arr.sort((a, b) => a - b);
	console.log(minToMax);

	console.log(
		'Summary after removed n lowest number:',
		leftMaxSum(minToMax, n)
	);
	console.log(
		'Summary after removed n highest numbers:',
		leftMinSum(minToMax, n)
	);

};
nElementSum([1, 32, 3, 4, 2], 3);

/**
 *
 * @param {Array} minToMax  sorted array
 * @param {Number} n numbers of element to be removed
 */
function leftMaxSum(minToMax, n) {
	let nMaxSum = 0;
	let arrayLength = minToMax.length;
	for (let i = n; i < arrayLength; i++) {
		nMaxSum = nMaxSum + minToMax[i];
	}
	return nMaxSum;
}

/**
 *
 * @param {Array} minToMax  sorted array
 * @param {Number} n numbers of element to be removed
 */
function leftMinSum(minToMax, n) {
	let nMinSum = 0;
	let arrayLength = minToMax.length;
	for (let i = 0; i < arrayLength - n; i++) {
		nMinSum = nMinSum + minToMax[i];
	}
	return nMinSum;
}
