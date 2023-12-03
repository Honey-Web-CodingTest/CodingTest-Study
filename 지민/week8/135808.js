//Level 1 - 과일 장수
function solution(k, m, score) {
	let sorted_apples = score.sort().reverse();
	let sum = 0;
	for (i = 1; i < Math.floor(score.length / m) + 1; i++) {
		sum += sorted_apples[i * m - 1] * m;
	}
	return sum;
}
