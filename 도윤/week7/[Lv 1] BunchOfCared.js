// Lv 1. 카드 뭉치 - 연습문제
function solution(cards1, cards2, goal) {
  let answer = "";
  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      cards1.shift();
    } else if (cards2[0] === goal[i]) {
      cards2.shift();
    } else {
      answer = "No";
      break;
    }
    answer = "Yes";
  }
  return answer;
}
