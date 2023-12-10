// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 가운데 글자 가져오기

function solution(s) {
  const strLen = s.length;
  
  const midIdx = Math.floor(strLen / 2);

  if (strLen % 2 !== 0) return s[midIdx];
  if (strLen % 2 === 0) return s[midIdx - 1] + s[midIdx];

  return midIdx;
}

// 다른 사람 풀이

function solution2(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

/** 
 * substr()
 * 사용을 권장하진 않는다고 한다.
 * 
 * substr(start)
 * substr(start, length)
 * 
 * return vale
 * 해당 부분의 새로운 string
 * 
 * const str = 'Mozilla';
 * 
 * console.log(str.substr(1, 2));
 * // Expected output: "oz"
 * 
 * console.log(str.substr(2));
 * // Expected output: "zilla"
 */