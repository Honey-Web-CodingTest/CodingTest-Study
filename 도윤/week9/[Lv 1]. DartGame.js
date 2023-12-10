// Lv 1. [1차]다트게임 - 2018 KAKAO BLIND RECRUITMENT
function solution(dartResult) {
  let tmp = 0,
    answer = [];

  for (let i = 0; i < dartResult.length; i++) {
    //dartResult[i]가 숫자라면
    if (!isNaN(dartResult[i])) {
      if (Number(dartResult[i]) === 1 && Number(dartResult[i + 1]) === 0) {
        tmp = 10;
        i++;
      } else {
        tmp = dartResult[i];
      }
    } else {
      switch (dartResult[i]) {
        case "S":
          answer.push(Math.pow(tmp, 1));
          continue;
        case "D":
          answer.push(Math.pow(tmp, 2));
          continue;
        case "T":
          answer.push(Math.pow(tmp, 3));
          continue;
        case "*":
          answer[answer.length - 1] *= 2;
          answer[answer.length - 2] *= 2;
          continue;
        case "#":
          answer[answer.length - 1] *= -1;
          continue;
      }
    }
  }

  let score = 0;
  answer.forEach((elm) => {
    score += Number(elm);
  });

  return score;
}
