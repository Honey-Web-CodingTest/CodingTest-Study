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
