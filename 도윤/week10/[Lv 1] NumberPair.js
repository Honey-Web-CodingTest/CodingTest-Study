//Lv 1. 숫자 짝꿍 - 연습문제 (solve!)
function solution(X, Y) {
  const xArr = new Array(10).fill(0);
  const yArr = new Array(10).fill(0);

  for (x of X) {
    xArr[x] += 1;
  }
  for (y of Y) {
    yArr[y] += 1;
  }

  const numberPair = [];
  for (let i = 0; i < 10; i++) {
    numberPair.push(Math.min(xArr[i], yArr[i]));
  }

  let answer = "";
  numberPair.forEach((elm, idx) => {
    answer += idx.toString().repeat(elm);
  });

  if (answer.length === 0) {
    return "-1";
  } else {
    answer = answer.split("").reverse().join("");

    return answer[0] === "0" ? "0" : answer;
  }
}
