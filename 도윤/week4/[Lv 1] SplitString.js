// Lv 1. 문자열 나누기 - 연습문제
function solution(s) {
  let curChar = "";
  let same = 0,
    diff = 0,
    cnt = 0;

  for (let c of s) {
    curChar === "" ? (curChar = c) : null;
    curChar === c ? same++ : diff++;

    if (same === diff) {
      cnt++;
      same = diff = 0;
      curChar = "";
    }
  }

  if (curChar.length > 0) {
    cnt++;
  }

  return cnt;
}
