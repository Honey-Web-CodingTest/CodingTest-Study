/* Lv 1. [1차] 비밀지도 - 2018 KAKAO BLIND RECRUITMENT
배열 속 주어진 수를 모두 2진수로 변환
변환한 2진수 중 모두 0일 때만 0 -> 공백 (하나라도 1이면 벽'#' 출력)
*/
function solution(n, arr1, arr2) {
  let binary1 = [],
    binary2 = [];
  let answer = "";
  let res = [];
  arr1.forEach((elm) => binary1.push(elm.toString(2).padStart(n, 0)));
  arr2.forEach((elm) => binary2.push(elm.toString(2).padStart(n, 0)));
  for (let i = 0; i < n; i++) {
    answer = "";
    for (let j = 0; j < n; j++) {
      if (binary1[i][j] === "0" && binary2[i][j] === "0") {
        answer += " ";
      } else {
        answer += "#";
      }
    }
    res.push(answer);
  }
  return res;
}
