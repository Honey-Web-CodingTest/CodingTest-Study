// Lv 1. 숫자 짝꿍 - 연습문제 -> 11 ~ 15 시간초과
function solution(X, Y) {
  const XArr = X.toString().split("");
  const YArr = Y.toString().split("");
  const maxLen = Math.max(XArr.length, YArr.length);
  const answer = [];

  for (let i = 0; i < maxLen; i++) {
    const tmp = XArr[i];
    if (YArr.includes(tmp)) {
      answer.push(tmp);
      YArr.splice(YArr.indexOf(tmp), 1);
    }
  }

  const answerSet = new Set(answer);

  if (answer.length === 0) {
    return "-1";
  }
  if (answerSet.size === 1 && answerSet.has("0")) {
    console.log("here");
    return "0";
  }

  return answer.sort((a, b) => b - a).join("");
}
