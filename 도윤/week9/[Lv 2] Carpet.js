// Lv 2. 카펫 - 완전탐색
function solution(brown, yellow) {
  let answer = [];
  const TOTAL_SIZE = brown + yellow;
  let width, height;

  //yellow 최소 1개 -> 감싸기위해 필요한 brown 3,3
  for (let i = 3; i < TOTAL_SIZE; i++) {
    //카펫의 임시 가로, 세로 구하기
    width = TOTAL_SIZE / i;
    height = i;

    if (width < height) continue;

    if ((width - 2) * (height - 2) === yellow) {
      answer.push(width, height);
    }
  }
  return answer;
}
