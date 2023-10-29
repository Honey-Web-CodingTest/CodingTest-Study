//Level 1 - 가장 가까운 같은 글자
//indexOf 활용하려다 실패
function solution(s) {
	let answer = [];
	let stringToArray = [...s];
	// console.log(stringToArray);
	for (i = 0; i < s.length; i++) {
		let found = 0;
		let same = s.indexOf(stringToArray[i]);
		if (same && same === i) {
			found += 1;
		}
		answer.push(found);
	}
	return answer;
}

//다른 풀이 - map 사용
function solution(s) {
	const hash = {};

	return [...s].map((v, i) => {
		let result = hash[v] !== undefined ? i - hash[v] : -1;
		hash[v] = i;
		return result;
	});
}

//다른 풀이 2 - slice, map 활용
const solution = (s) =>
	[...s].map((char, i) => {
		const count = s.slice(0, i).lastIndexOf(char);
		return count < 0 ? count : i - count;
	});
