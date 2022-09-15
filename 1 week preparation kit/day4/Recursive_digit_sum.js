// Xác định super digit của một số nguyên x bằng cách sử dụng các quy tắc sau:
// Cho một số nguyên, chúng ta cần tìm super digit của số nguyên.
// - nếu số nguyên có 1 chữ số, thì super digit của nó là x
// - Nếu không, super digit của x bằng tổng của các digit của x

// example: super digti of 9875 is:
// super_digit(9875)   	9+8+7+5 = 29
// 	super_digit(29) 	2 + 9 = 11
// 	super_digit(11)		1 + 1 = 2
// 	super_digit(2)		= 2

// n ='9875'
// k = 4
// number p dc tạo bởi việc concatenate string n k times -> p = 9875987598759875
// superDigit(p) = superDigit(9875987598759875) 9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
// superDigit(p) = superDigit(116) 1+1+6 = 8
// superDigit(p) = superDigit(8)
// tất cả chữ số của p có tổng là 116, tất cả chữ sốc ủa 16 có tổng là 8 -> super digit là 8

function superDigit(n, k) {
	// Write your code here
	let stringLength = n.length;
	if (stringLength === 1) return Number(n);
	let digitSum = n
		.split('')
		.reduce(
			(accumulator, currentValue) => accumulator + Number(currentValue),
			0
		);
	digitSum *= k;
	return superDigit(digitSum.toString(), 1);
}
superDigit('9875', 4);
// ok
