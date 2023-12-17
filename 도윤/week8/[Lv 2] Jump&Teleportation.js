// Lv 2. 점프와 순간이동 - Summer/Winter Coding(~2018)
function solution(n) {
  let use = 0;

  while (n !== 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n--;
      use++;
    }
  }
  return use;
}
