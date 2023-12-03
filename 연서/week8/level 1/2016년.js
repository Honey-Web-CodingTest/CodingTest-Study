function solution(a, b) {
  //윤년은 2월 29일까지 있음
  let answer = "";
  let sum_day = 0;
  const day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < a - 1; i++) {
    //월별 일 수 더하기
    sum_day += month[i];
  }
  sum_day += b;
  answer += day[sum_day % 7];
  return answer;
}

//다른 풀이 new Date() 활용
function solution(a, b) {
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`${a}, ${b}, 2016`).getDay();
  //getDay는 날짜의 요일을 0~6으로 바꿔주는 메소드
  return day[date];
}
