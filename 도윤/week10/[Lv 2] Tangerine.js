// Lv 2. 귤 고르기 - 연습문제
function solution(k, tangerine) {
  const kgMap = new Map();
  let answer = 0;

  tangerine.forEach((elm) => {
    if (kgMap.has(elm)) {
      kgMap.set(elm, kgMap.get(elm) + 1);
    } else {
      kgMap.set(elm, 1);
    }
  });

  const arr = [...kgMap].sort((a, b) => b[1] - a[1]);

  arr.forEach((elm) => {
    if (k > 0) {
      k -= elm[1];
      answer++;
    }
  });

  return answer;
}
