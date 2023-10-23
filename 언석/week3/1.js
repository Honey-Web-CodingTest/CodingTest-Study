// https://school.programmers.co.kr/learn/courses/30/lessons/12939
// 최댓값 최솟값

const solution = function findMinAndMaxValue(s) {
  const newArr = s.split(' ').map((item) => {
    return Number(item);
  });

  return(`${Math.min(...newArr)} ${Math.max(...newArr)}`);
}