function solution(cards1, cards2, goal) {
  let answer = true;

  goal.map((targetWord) => {
    if (cards1[0] === targetWord) {
      cards1.shift();
    } else if (cards2[0] === targetWord) {
      cards2.shift();
    } else {
      answer = false;
    }
  });

  return answer ? "Yes" : "No";
}
