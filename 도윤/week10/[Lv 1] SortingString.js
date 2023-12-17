// Lv 1. 문자열 내 마음대로 정렬하기 - 연습문제
function solution(strings, n) {
  strings.sort((a, b) => {
    //n번째 인덱스별로 정렬
    if (a[n] !== b[n]) {
      return a[n] > b[n] ? 1 : -1;
    } else {
      //문자열 정렬
      return a > b ? 1 : -1;
    }
  });
  return strings;
}
