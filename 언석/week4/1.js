// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 폰켓몬

const solution = function pickMaxNumberOfPocketMon(arr) { 
  const DELETE_DUPLICATE = new Set(arr);

  return (DELETE_DUPLICATE.size >= arr.length / 2) ? arr.length / 2 : DELETE_DUPLICATE.size;
}