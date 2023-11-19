// Lv 2. 최솟값 만들기 - 연습문제
function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}
