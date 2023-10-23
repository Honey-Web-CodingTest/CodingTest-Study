//Lv 2. 최댓값과 최솟값 - 연습문제
function solution(s) {
  const numArr = s.split(" ");
  return Math.min(...numArr) + " " + Math.max(...numArr);
}
