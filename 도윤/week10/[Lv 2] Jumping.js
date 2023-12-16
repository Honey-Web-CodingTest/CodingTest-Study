// Lv 2. 멀리 뛰기 - 연습문제
function solution(n) {
  const answer = new Array(n + 1).fill(0);
  answer[0] = 1;
  answer[1] = 1;
  const MOD = 1234567;

  for (let i = 2; i <= n; i++)
    answer[i] = (answer[i - 1] + answer[i - 2]) % MOD;

  return answer[n];
}
