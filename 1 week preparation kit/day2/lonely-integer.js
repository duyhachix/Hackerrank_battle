/*
Given an array of integers, where all elements but one occur twice, find the unique element.
EXAMPLE
a = [1,2,3,4,3,2,1]
--> the unique integer is 4
Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers
Returns

int: the element that occurs only once

Input Format

The first line contains a single integer, n, the number of integers in the array.
The second line contains n  space-separated integers that describe the values in a.

*/

/////////////////////////////////////////////////////////////

function lonelyinteger(a) {
  // Write your code here
  let lonely = a.filter((item) => a.indexOf(item) === a.lastIndexOf(item));
  //console.log(lonely);
  return lonely;
}
lonelyinteger([1, 2, 123, 456, 2, 1]);
