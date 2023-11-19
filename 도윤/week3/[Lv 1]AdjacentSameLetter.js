//Lv 1. 가장 가까운 같은 글자 - 연습문제
function solution(s) {
  const letters = [],
    answer = [];

  s.split("").forEach((elm, idx) => {
    if (!letters.includes(elm)) {
      answer.push(-1);
      letters.push(elm);
    } else {
      answer.push(idx - letters.lastIndexOf(elm));
      letters.push(elm);
    }
  });
  return answer;
}
