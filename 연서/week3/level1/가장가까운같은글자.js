//나의 풀이 -> map 자료구조 활용
function solution(s) {
  let answer = [];

  let strings = new Map();

  s.split("").map((el, idx) => {
    if (strings.has(el)) {
      answer.push(idx - strings.get(el));
    } else {
      answer.push(-1);
    }
    strings.set(el, idx);
  });

  return answer;
}

//다른 풀이 - lastIndexOf 메서드 활용
const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
