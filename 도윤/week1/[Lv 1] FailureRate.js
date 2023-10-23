//Lv 1. 실패율 - 2019 KAKAO BLIND RECRUITMENT
function solution(N, stages) {
  let failRate = [];
  let reach, nonClear;
  for (let i = 1; i <= N; i++) {
    reach = nonClear = 0;
    reach = stages.filter((elm) => elm >= i).length;
    nonClear = stages.filter((elm) => elm === i).length;
    failRate.push([i, nonClear / reach]);
  }
  return failRate.sort((a, b) => b[1] - a[1]).map((elm) => elm[0]);
}
