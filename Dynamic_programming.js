// // fibonacy recursion
// function fibonacyRecursion(n) {
// 	if (n === 1 || n === 2) return 1;
// 	return fibonacyRecursion(n - 1) + fibonacyRecursion(n - 2);
// }
// console.log(fibonacyRecursion(5));
// fibonacyRecursion(5);

// function memoizeRecursionFib(n, cache = [0, 1, 1]) {
// 	if (cache[n]) return cache[n];
// 	cache[n] =
// 		memoizeRecursionFib(n - 1, cache) +
// 		memoizeRecursionFib(n - 2, cache);

// 	return cache[n];
// }

// function basicLoopFib(n, cache = [0, 1, 1]) {
// 	if (n === 1 || n === 2) return 1;
// 	for (let i = 3; i < n; i++) {
// 		cache[i] = cache[i - 1] + cache[i - 2];
// 	}
// 	return cache[n];
// }

function fastLoop(n) {
	if (n === 1 || n === 2) return 1;
	let first = 1;
	let second = 1;
	for (let i = 3; i < n; i++) {
		second = first + second;
		first = second - first;
	}
	return second;
}
// console.time('basic');
// console.log(fibonacyRecursion(45));
// console.timeEnd('basic');

// console.time('basic');
// console.log(basicLoopFib(45));
// console.timeEnd('basic');
console.time('fast');
console.log(fastLoop(100));
console.timeEnd('fast');
