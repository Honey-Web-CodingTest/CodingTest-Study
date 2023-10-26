function solution(s, n) {
	let answer = [];

	for (i = 0; i < s.length; i++) {
		if (s.charCodeAt(i) === 32) {
			answer.push(s[i]);
		} else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
			answer.push(String.fromCharCode(65 + ((s.charCodeAt(i) + n - 65) % 26)));
		} else if (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 122) {
			answer.push(String.fromCharCode(97 + ((s.charCodeAt(i) + n - 97) % 26)));
		}
	}
	return answer.join("");
}
