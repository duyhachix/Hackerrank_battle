/*
cho 1 string s và chữ cái c có trong string s, return 1 array of integer là answer 
với answer.length === s.length và answer[i] là khoảng cách từ index i tới sự xuất hiện gần nhất của kí tự c trong s
*/
//Example 1:
/*
Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.
*/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

/*
shortestToChar fnction
1. create an oputput array
2. loop through s
	a. create vả distance to equan to a helper function findDistance to find distance
	b. push distance to outpyut array
3. return output

findDistance function
1. create condiditon if the  curren char is euqal to target 'c' -> return 0
2. create j pionter var to 1
	a. create wwhile for j to be indise the length of s
		i. create condition to see if j is the distance to target on both sides
			return j
		ii. increment j
*/
var shortestToChar = function (s, c) {


};
shortestToChar('loveleetcode', 'e');
