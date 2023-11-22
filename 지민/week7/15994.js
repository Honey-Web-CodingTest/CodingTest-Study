// Level 1 - 카드 뭉치 풀이
function solution(cards1, cards2, goal) {
	for (let i = 0; i < goal.length; i++) {
		if (goal[i] === cards1[0]) {
			cards1.shift();
		} else if (goal[i] === cards2[0]) {
			cards2.shift();
		} else {
			return "No";
		}
	}
	return "Yes";
}

// 다른 풀이 - 더 간단한 반복문
function solution(cards1, cards2, goal) {
	for (const s of goal) {
		if (cards1[0] == s) {
			cards1.shift();
		} else if (cards2[0] == s) {
			cards2.shift();
		} else {
			return "No";
		}
	}

	return "Yes";
}
