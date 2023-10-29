// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// 이진 변환 반복하기

let zeroCount = 0;
let repeatCount = 0;

const solution = function repeatConvertToBinary(str) {
  repeatCount += 1;

  const DELETE_ZERO = [...str].map((char) => {
    if (char === '0') {
      zeroCount += 1;
      
      return ;
    }

    return char;
  }).join('');

  if (DELETE_ZERO === '1') {
    return [repeatCount, zeroCount];
  }

  let deleteZeroLength = DELETE_ZERO.length;
  const BINARY_NUMBER_ARRAY = [];

  while (deleteZeroLength > 0) {
    if (deleteZeroLength % 2 === 0) {
      BINARY_NUMBER_ARRAY.push(0);
    }
    if (deleteZeroLength % 2 !== 0) {
      BINARY_NUMBER_ARRAY.push(1);
    }

    deleteZeroLength = Math.floor(deleteZeroLength /= 2);
  }

  const BINARY_NUMBER = BINARY_NUMBER_ARRAY.reverse().join('');

  return solution(BINARY_NUMBER);
}

// 다른 풀이

function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}

/**
 * toString()을 통해 진수 변환 가능
 * 32.toSting(2); // 2진수
 * 32.toString(16); // 16진수
 * 
 * parseInt()는 그 반대
 * parseInt(변환하고자 하는 문자열, 그 문자열의 진수)
 * parseInt('11', 2); // 3 (type: number)
 */
