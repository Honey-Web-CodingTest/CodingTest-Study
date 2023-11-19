//Lv 2. 이진 변환 반복하기 - 월간 코드 챌린지 시즌1
function solution(s) {
  let len = 0,
    removed = 0,
    times = 0;

  while (s.length > 1) {
    len = s.length;
    s = s.split("0").join("");
    removed += len - s.length;
    times++;
    s = s.length.toString(2);
  }
  return [times, removed];
}
