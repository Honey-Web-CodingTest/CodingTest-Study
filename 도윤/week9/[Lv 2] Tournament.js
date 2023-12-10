// Lv 2. 예상 대진표 - 2017 팁스다운
function solution(n, a, b) {
  let round = 0;

  let newA = Math.min(a, b);
  let newB = Math.max(a, b);

  //Math.round를 했을 때 최종으로 나오는 값은 1이기 때문
  while (newA !== newB) {
    newA = Math.round(newA / 2);
    newB = Math.round(newB / 2);
    round++;
  }

  return round;
}
ㅍ;
