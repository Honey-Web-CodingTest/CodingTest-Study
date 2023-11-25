// Lv 1. 명예의 전당 (1) - 연습문제
function solution(k, score) {
  let rank = [],
    answer = [];

  for (let i = 0; i < score.length; i++) {
    rank.push(score[i]);
    rank = rank.sort((a, b) => b - a).slice(0, k);
    answer.push(Math.min(...rank));
  }
  return answer;
}
