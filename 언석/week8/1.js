// https://school.programmers.co.kr/learn/courses/30/lessons/12935
// 제일 작은 수 제거하기

function solution(arr) {
  const minIdx = arr.indexOf(Math.min(...arr));
  console.log(minIdx);
  
  arr.splice(minIdx, 1)

  if (arr.length === 0) {
    return [-1]
  }

  return arr;
}
