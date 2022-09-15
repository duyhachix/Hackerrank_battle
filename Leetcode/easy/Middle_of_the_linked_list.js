// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function (head) {
  let node = head;
  let nodeArr = [];
  while (node != null) {
    nodeArr.push(node);
    node = node.next;
  }
  let nodeArrLength = nodeArr.length;
  node = head;
  return nodeArrLength % 2 == 1
    ? nodeArr[Math.floor(nodeArrLength / 2)]
    : nodeArr[nodeArrLength / 2];
};
// done
