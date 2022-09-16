/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// apply stack and linked list
var isPalindrome = function (head) {
  let currentNode = head;
  let stack = [];
  // push all element's value of linked-list in stack
  while (currentNode != null) {
    stack.push(currentNode.val);
    currentNode = currentNode.next;
  }
  currentNode = head;
  while (currentNode != null) {
        
    if (currentNode.val !== stack.pop()) {
      return false;
    }
    currentNode = currentNode.next;
  }
  return true
}

isPalindrome([1, 2, 2, 1]);
