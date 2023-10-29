//Level 1 - 문자열 내 마음대로 정렬하기
//틀린 답
function solution(strings, n) {
	strings.sort((a, b) => {
		a[n] - b[n] ? -1 : a[n] === b[n] ? 0 : 1;
	});
	return strings;
}

//올바른 풀이 - localCompare 활용
function solution(strings, n) {
	return strings.sort((s1, s2) =>
		s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
	);
}

//다른 풀이 2

function solution(strings, n) {
	return strings.sort((a, b) => {
		const chr1 = a.charAt(n);
		const chr2 = b.charAt(n);

		if (chr1 == chr2) {
			return (a > b) - (a < b);
		} else {
			return (chr1 > chr2) - (chr1 < chr2);
		}
	});
}
