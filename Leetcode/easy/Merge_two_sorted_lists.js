/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2; // check for special cases
  let currNode1 = list1
  let currNode2 = list2
  let newList = new ListNode();
  let last = newList;
  while (currNode1 && currNode2) {
    if (currNode1.val > currNode2.val) {
      last.next = currNode2;
      currNode2 = currNode2.next;
    } else {
      last.next = currNode1;
      currNode1 = currNode1.next;
    }
    last = last.next;
  }
  last.next = currNode1 || currNode2;

  return newList.next;
};
// review the solution
