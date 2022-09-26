/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let arr_l1 = [];
	let arr_l2 = [];
	let currentNode1 = l1;
	let currentNode2 = l2;

	// khi node khong phai la null thi add value cua node vao array arr_l1
	while (currentNode1 != null) {
		// console.log('length of linked list:')
		// console.log('current node1: ', currentNode1)
		// console.log('arr_l1:', arr_l1)
		arr_l1.push(currentNode1.val);
		currentNode1 = currentNode1.next;
	}
	if (arr_l1[0] === 0) {
		arr_l1 = arr_l1.slice(1);
	}
	console.log('array 1: ', arr_l1);
	while (currentNode2 != null) {
		arr_l2.push(currentNode2.val);
		currentNode2 = currentNode2.next;
	}

	// đảo ngược element của 2 array mới và biến nó thành string rồi parse thành kiểu dữ liệu BigInt
	let num1_reverse = BigInt(arr_l1.reverse().join(''));
	let num2_reverse = BigInt(arr_l2.reverse().join(''));

	// tính tổng 2 số rồi biến nó thành array mới là num3
	let num3_reverse = num1_reverse + num2_reverse;
	let num3_arr = num3_reverse
		.toString()
		.split('')
		.reverse()
		.map((a) => +a);

	// tạo linked list mới chứa các node mới
	let newLinkedList = new ListNode();

	// set newNode là head mới cho new linked list
	let newNode = newLinkedList;
	let newLllength = num3_arr.length;

	// lặp qua chiều dài của
	for (let i = 0; i < newLllength; i++) {
		newNode.next = new ListNode(num3_arr[i]);
		newNode = newNode.next;
	}

	return newLinkedList.next;
};
