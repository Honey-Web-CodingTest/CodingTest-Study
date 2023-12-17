// Level 1 - 소수 찾기
// 다른 풀이 - 에라토스테네스의 체
function solution(n) {
	const s = new Set();
	for (let i = 1; i <= n; i += 2) {
		s.add(i);
	}
	s.delete(1);
	s.add(2);
  // 배수들 삭제
	for (let j = 3; j < Math.sqrt(n); j++) {
		if (s.has(j)) {
			for (let k = j * 2; k <= n; k += j) {
				s.delete(k);
			}
		}
	}
	return s.size;
}
