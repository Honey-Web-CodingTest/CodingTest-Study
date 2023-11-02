function solution(name, yearning, photo) {
  const score = new Map();

  name.forEach((n, idx) => {
    //사람 별 그리움 점수 저장
    score.set(n, yearning[idx]);
  });

  // 그리움 점수 있으면 합치기, 없으면 0
  return photo.map((names) =>
    names.reduce((a, n) => a + (score.get(n) || 0), 0)
  );
}
