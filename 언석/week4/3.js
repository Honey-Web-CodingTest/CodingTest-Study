// https://school.programmers.co.kr/learn/courses/30/lessons/12944
// 평균 구하기

const solution = function printAverage(arr) {
  return arr.reduce((prev, curr) => { return prev + curr; }, 0) / arr.length;
}