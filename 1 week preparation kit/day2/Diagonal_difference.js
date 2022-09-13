// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 7 8 9

// The left-to-right diagonal = 1 +5 + 9 =15 . The right to left diagonal = 3 +5 +9 = 17 . Their absolute difference is .
// Their absolute difference is |15 -17| = 2

// Function description

// Complete the diagonalDifference function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers

// Return

// int: the absolute diagonal difference

// Input Format

// The first line contains a single integer,n , the number of rows and columns in the square matrix arr .
// Each of the next n lines describes a row, arr[i] , and consists of n space-separated integers arr[i][j].

function diagonalDifference(arr) {
	// Write your code here
	let n = arr[0].length;
	let primaryDiaSum = 0;
	let secondaryDiaSum = 0;
	// let result = 0;
	for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
		primaryDiaSum += arr[i][i];
		secondaryDiaSum += arr[i][j];
	}
	let result = primaryDiaSum - secondaryDiaSum;

	return Math.abs(result);
}
diagonalDifference([1, 2, 3], [4, 5, 6], [7, 8, 9]);
