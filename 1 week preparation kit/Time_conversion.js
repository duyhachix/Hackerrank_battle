// change format of time
// Example 04: 00: 00PM into 16: 00: 00

//////////////////////////////////////////////////////////////////////////////////
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
	// Write your code here
	let hours = s.slice(0, 2);
	if (hours < 12) {
		let newFormat = +hours + 12;
		return `${newFormat}${s.slice(2, 8)}`;
	}
	if ((hours = 12)) {
		let newFormat = 00;
		return `${newFormat}0${s.slice(2, 8)}`;
	}
}
timeConversion('12:00:00PM');
timeConversion('3:00:00PM');


function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const s = readLine();

	const result = timeConversion(s);

	ws.write(result + '\n');

	ws.end();
}
