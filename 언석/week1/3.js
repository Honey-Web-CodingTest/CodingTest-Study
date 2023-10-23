// https://school.programmers.co.kr/learn/courses/30/lessons/12901
// 2016년

const solution = (a, b) => {
  const daysOfMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  const days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

  for (let i = 0; i < a; i++) {
    b += daysOfMonth[i];
  }
  
  return days[b % 7];
}

// 다른 풀이
function getDayName(a,b){
  var tempDate = new Date(2016, a-1, b);

  return tempDate.toString().slice(0,3).toUpperCase();
}