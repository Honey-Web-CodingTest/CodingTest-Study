// https://school.programmers.co.kr/learn/courses/30/lessons/12933
// 정수 내림차순으로 배치하기

function solution(n) {
  const arr = String(n).split('');

  return Number(arr.sort().reverse().join(''));
}
