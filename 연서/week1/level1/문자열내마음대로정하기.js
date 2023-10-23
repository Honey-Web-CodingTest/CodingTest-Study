function solution(strings, n) {
  return strings.sort((a, b) => {
    // 사전 기준 정렬
    if (a[n] === b[n]) {
      return a > b ? 1 : -1;
    }
    // n번째 기준 정렬
    return a[n] > b[n] ? 1 : -1;
  });
}

//다른 풀이
//
// function solution(strings, n) {
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }
