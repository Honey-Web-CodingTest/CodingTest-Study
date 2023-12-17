//Level 2 - JadenCase 문자열 만들기
//for ...in에서는 객체의 키와 값을 받기 때문에 배열을 돌리면 index를 반환한다.
//또한, toUpperCase는 원본을 바꾸지 않는다. 그리고 문자열을 인덱스로 수정 불가하다.
function solution(s) {
	let lowStr = s.toLowerCase();
	let strs = lowStr.split(" ");
	for (let word in strs) {
		word[0].toUpperCase();
	}
	return strs.join(" ");
}

//다른 풀이
function solution(s) {
	return s
		.split(" ")
		.map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
		.join(" ");
}

function solution(s) {
	let lowStr = s.toLowerCase();
	let strs = lowStr.split(" ");

	for (let i = 0; i < strs.length; i++) {
		strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].slice(1);
	}

	return strs.join(" ");
}
