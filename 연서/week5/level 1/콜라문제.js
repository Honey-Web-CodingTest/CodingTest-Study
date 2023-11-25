function solution(a, b, n) {
  let total = 0;
  let now = 0;

  while (n >= a) {
    now = Math.floor(n / a) * b;
    total += now;
    n = now + (n % a);
  }
  return total;
}
