// https://school.programmers.co.kr/learn/courses/30/lessons/12917
// 문자열 내림차순으로 배치하기

function solution(s) {
  return (Array(...s).sort().reverse().join(''));
}

// 다른 풀이
function solution2(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}

/**
 * obj.sort().reverse();
 * vs
 * obj.sort((a, b) => (a > b ? -1 : 1))
 * vs
 * obj.sort((a, b) => b.localeCompare(a))
 * 
 * winner is obj.sort().reverse()
 * 
 * ref
 * https://stackoverflow.com/questions/52030110/sorting-strings-in-descending-order-in-javascript-most-efficiently
 */