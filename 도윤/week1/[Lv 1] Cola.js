//Lv 1. 콜라 문제 - 연습 문제
function solution(a, b, n) {
  let returned = 0,
    left = 0,
    total = n;
  while (total >= a) {
    left = total % a;
    returned += Math.floor(total / a) * b;
    total = Math.floor(total / a) * b + left;
  }
  return returned;
}
