function gridChallenge(grid) {
	// Write your code here

	// 1. sort từng element trong mảng con theo thứ tự alphabetical
	// 2. push các mảng con vào 1 mảng mới
	let currentGrid = [];
	let n = grid.length;
	for (let i = 0; i < n; i++) {
		let newChildArr = grid[i].split('').sort();
		currentGrid.push(newChildArr);
	}
	console.log(currentGrid);
	// 3. so sánh các phần tử theo cột, chỉ cần 1 case mà phần tử nào không theo alphabetical order thì return false luôn
	let colLength = currentGrid[0].length;
	for (let j = 0; j < currentGrid.length - 1; j++) {
		for (let k = 0; k < colLength; k++) {
			if (currentGrid[j][k] > currentGrid[j + 1][k]) {
				console.log(0);
				return 'NO';
			}
		}
	}
	console.log(1);
	return 'YES';
}
gridChallenge(['bas', 'tsc', 'kea']);
