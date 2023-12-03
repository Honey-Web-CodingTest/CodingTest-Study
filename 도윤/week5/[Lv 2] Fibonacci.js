// Lv 2. 피보나치 수 - 연습문제
function solution(n) {
  let add1 = 0,
    add2 = 1,
    sum = 0,
    mod = 0;
  for (let i = 2; i <= n; i++) {
    sum = (add1 + add2) % 1234567;
    add1 = add2;
    add2 = sum;
  }
  return sum;
}
