function solution(k, score) {
  const scoreStack = [];
  return score.map((s, idx) => {
    // 값을 넣고 내림차순 정렬
    scoreStack.push(s);
    scoreStack.sort((a, b) => b - a);
    // k보다 넘쳤을 때 순위가 낮은 점수 제외
    if (scoreStack.length > k) {
      scoreStack.pop();
    }
    return scoreStack[scoreStack.length - 1];
  });
}
