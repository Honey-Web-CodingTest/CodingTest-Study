// https://school.programmers.co.kr/learn/courses/30/lessons/12948
// 핸드폰 번호 가리기

function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(phone_number.length - 4);
}

// 다른 사람 풀이1
function hide_numbers(s){
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 다른 사람 풀이2
function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}