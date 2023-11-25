// Lv 1. 추억 점수 - 연습문제
function solution(name, yearning, photo) {
  let missingScore = [];
  let tmpScr = 0;
  for (let i = 0; i < photo.length; i++) {
    tmpScr = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (name.includes(photo[i][j])) {
        tmpScr += yearning[name.indexOf(photo[i][j])];
      }
    }
    missingScore.push(tmpScr);
  }
  return missingScore;
}
