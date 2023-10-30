//Lv 1. 2016년 - 연습문제
function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const lastDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayCnt = 0;
  let daysIdx = 5; //1월 1일이 금요일이기 때문에 금요일 idx부터 시작

  for (let i = 1; i <= a; i++) {
    i === a ? (dayCnt += b) : (dayCnt += lastDay[i - 1]);
  }
  return days[(dayCnt + daysIdx - 1) % 7];
}
