// https://school.programmers.co.kr/learn/courses/30/lessons/12912
// 두 정수 사이의 합

function solution(a, b) {
  let sum = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }

  return sum;
}

// 다른 사람 풀이
function adder(a, b, s = 0){
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;

  return s;
}
