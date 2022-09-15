/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class Node {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}

var middleNode = function (head) {
	let node = head;
	console.log(node.next);
};
middleNode([1, 2, 3, 4, 5, 6]);
