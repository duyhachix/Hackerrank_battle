function palindromeIndex(s) {
	// Write your code here
	let strLength = s.length;
	for (let i = 0; i < strLength - 1; i++) {
		if (s[i] == s[strLength - (1 + i)]) {
			console.log('đúng r đá');
			return true;
		} else console.log('ngu thế dm');
	}
}
palindromeIndex('hellobanduy');
