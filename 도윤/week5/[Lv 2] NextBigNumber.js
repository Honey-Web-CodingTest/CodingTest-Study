// Lv 2. 다음 큰 숫자 - 연습문제
function solution(n) {
  const findCnt = (num) => {
    return num
      .toString(2)
      .split("")
      .filter((elm) => elm === "1").length;
  };

  let start = n + 1;
  let oneCnt = 0;

  while (true) {
    oneCnt = findCnt(start);
    if (oneCnt === findCnt(n)) {
      break;
    }
    start++;
  }

  return start;
}
