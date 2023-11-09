// Lv 1. 모의고사 - 완전탐색
function solution(answers) {
  const sol1 = [1, 2, 3, 4, 5],
    sol2 = [2, 1, 2, 3, 2, 4, 2, 5],
    sol3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0;
  const answer = [];

  answers.forEach((elm, idx) => {
    if (sol1[idx % sol1.length] === elm) cnt1++;
    if (sol2[idx % sol2.length] === elm) cnt2++;
    if (sol3[idx % sol3.length] === elm) cnt3++;
  });

  const max = Math.max(cnt1, cnt2, cnt3);
  if (cnt1 === max) answer.push(1);
  if (cnt2 === max) answer.push(2);
  if (cnt3 === max) answer.push(3);

  return answer;
}
