// Lv 1. 덧칠하기 - 연습문제
function solution(n, m, section) {
  let paint = 0,
    answer = 0;
  section.forEach((elm) => {
    if (elm > paint) {
      paint = elm + (m - 1);
      answer++;
    }
  });
  return answer;
}
