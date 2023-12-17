// Lv 2. N개의 최소공배수 - 연습문제
function findGCD(a, b) {
  let mod = a % b;
  return !mod ? b : findGCD(b, mod);
}

function findGCM(a, b) {
  return (a * b) / findGCD(a, b);
}

function solution(arr) {
  let answer = 1;

  arr.forEach((elm) => {
    answer = findGCM(answer, elm);
  });

  return answer;
}
