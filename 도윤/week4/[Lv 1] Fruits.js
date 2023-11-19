// Lv 1. 과일장수 - 연습문제
function solution(k, m, score) {
  let box = [];
  let price = 0,
    answer = 0;

  if (score.length < m) {
    return 0;
  }

  score.sort((a, b) => a - b);

  while (score.length >= m) {
    box = score.splice(score.length - m, m);
    price = m * box[0];
    answer += price;
  }

  return answer;
}
