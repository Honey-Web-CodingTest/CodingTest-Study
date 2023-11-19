// https://school.programmers.co.kr/learn/courses/30/lessons/12916
// 문자열 내 p와 y의 개수

const solution = function IsSameCountPAndY(str) {
  let pCount = 0;
  let yCount = 0;

  [...str].forEach((char) => {
    if (char === 'p' || char === 'P') {
      return pCount += 1;
    }
    if (char === 'y' || char === 'Y') {
      return yCount += 1;
    }
  })

  if (pCount === yCount) return true;

  return false;
}

// 다른 풀이
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

/** 
 * split()
 * const str = 'The quick brown fox jumps over the lazy dog.';
 * 
 * const words = str.split(' ');
 * console.log(words[3]);
 * // Expected output: "fox"
 * 
 * const chars = str.split('');
 * console.log(chars[8]);
 * // Expected output: "k"
 * 
 * const strCopy = str.split();
 * console.log(strCopy);
 * // Expected output: Array ["The quick brown fox jumps over the lazy dog."]
*/
