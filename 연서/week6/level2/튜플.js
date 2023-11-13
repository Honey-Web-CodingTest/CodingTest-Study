function solution(s) {
  const answer = [];
  // 집합을 배열로 바꾸기(정규표현식 사용)
  const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));

  // 요소 개수대로 오름차순 정렬
  arr.sort((a, b) => a.length - b.length);

  // 값이 있는지 확인 (중복 값인지 확인)
  arr.forEach((col) => {
    col.forEach((row) => {
      if (!answer.includes(row)) answer.push(row);
    });
  });
  return answer;
}

// 다른 풀이
const tupleFrom = (str) =>
  str
    .slice(2, -2)
    .split("},{")
    .map((it) => toNumbers(it))
    .sort(accendingByLength)
    .reduce(
      (acc, cur) => [...acc, ...cur.filter((it) => !acc.includes(it))],
      []
    );

const toNumbers = (str) => str.split(",").map((it) => Number(it));

const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;

const solution = (s) => tupleFrom(s);
