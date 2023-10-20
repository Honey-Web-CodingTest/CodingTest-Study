//Lv 1. 둘만의 암호 - 연습문제
function solution(s, skip, index) {
  let answer = "";
  const alphArr = Array(26)
    .fill()
    .map((v, i) => String.fromCharCode(i + 97))
    .filter((elm) => !skip.includes(elm));

  s.split("").forEach((elm) => {
    let newIdx = (alphArr.indexOf(elm) + index) % alphArr.length;
    answer += alphArr[newIdx];
  });

  return answer;
}
