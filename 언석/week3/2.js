// https://school.programmers.co.kr/learn/courses/30/lessons/12981
// 영어 끝말잇기

const solution = function engEndLetterGame(n, words) {
  const CONFIRM_DUPLICATE_WORDS = [...new Set(words)];
  
  if (CONFIRM_DUPLICATE_WORDS.length !== words.length) {
    const DUPLICATE_INDEX = [];

    words.forEach((element, idx) => {
      if (element !== CONFIRM_DUPLICATE_WORDS[idx]) {
        DUPLICATE_INDEX.push(idx + 1);
      }
    });

    const LOSER_NUM = DUPLICATE_INDEX[0] % n === 0 ? n : DUPLICATE_INDEX[0] % n;
    
    return [LOSER_NUM, Math.ceil(DUPLICATE_INDEX[0] / n)];
  }

  const LOSER_INDEX = [];

  words.reduce((acc, cur, idx) => {
    if (acc !== '' && (acc[acc.length - 1] !== cur[0])) {
      LOSER_INDEX.push(idx + 1);
    }

    return acc += cur;
  }, '');

  const LOSER_NUM = LOSER_INDEX[0] % n === 0 ? n : LOSER_INDEX[0] % n;

  if (LOSER_INDEX.length === 0) {
    return [0, 0];
  }
  if (LOSER_INDEX.length !== 0) {
    return [LOSER_NUM, Math.ceil(LOSER_INDEX[0] / n)];
  }
}

// 다른 풀이

function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
      answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
      return now[now.length-1];
  }, "")

  return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}
