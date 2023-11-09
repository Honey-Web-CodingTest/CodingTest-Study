//Level 1 - 명예의 전당 문제 풀이
function solution(k, score) {
	let scores = [];
	let answers = [];
	for (let i = 0; i < score.length; i++) {
		scores.push(score[i]);
		scores.sort((a, b) => b - a);
		if (scores.length <= k) {
			answers.push(scores[scores.length - 1]);
		} else {
			answers.push(scores[k - 1]);
		}
	}
	return answers;
}
