// https://school.programmers.co.kr/learn/courses/30/lessons/12951
// JadenCase 문자열 만들기

const solution = function makeStringToJadenCase(str) {
  const arr = str.split(' ').map((item) => {
    return ([...item].map((str, idx) => {
      if (idx === 0) {
        return str.toUpperCase();
      }
      if (idx !== 0) {
        return str.toLowerCase();
      }
    }).join(''));
  }).join(' ');

  return arr;  
}

// 다른 풀이

function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}

/**
 * str.charAt(index);
 * index 생략시 0으로 자동 설정
 * 
 * str.substring(indexStart, indexEnd?);
 * 기존 문자열의 부분 문자열을 return
 * 
 * substr()과의 차이점
 * str.substr(startIndex, number of char);
 * 
 * slice()와의 차이점
 * substr은 startIndex가 endIndex보다 크면 둘 을 swap 해준다
 * 인수 둘 다 negative거나 NaN인 경우 0으로 간주하여 빈 문자열 return
 * 
 * slice는 빈 문자열을 return
 * NaN은 0으로 간주
 * 둘 다 negative 인수이면 계산해서 값 출력
 */