// Level 2 - 최댓값과 최솟값
function solution(s) {
	let strings = s.split(""); //여기에 공백 기준으로 split 안 해서 틀림
	let maxStr = Math.max(...strings);
	let minStr = Math.min(...strings);

	return minStr, maxStr;
}

// 정담 - split 기준 잘 설정하기!
function solution(s) {
	const arr = s.split(" ");

	return Math.min(...arr) + " " + Math.max(...arr);
}
