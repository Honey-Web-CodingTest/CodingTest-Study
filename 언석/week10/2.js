// https://school.programmers.co.kr/learn/courses/30/lessons/12910
// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  const result = arr.filter((num) => !(num % divisor));

  return result.length ? result.sort((a, b) => a - b) : [-1];
}