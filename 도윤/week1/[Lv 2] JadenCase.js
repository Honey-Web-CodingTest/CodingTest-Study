//Lv 2. JadenCase 문자열 만들기 - 연습 문제
function solution(s) {
  const words = s.split(" ");
  const jadenCaseRes = words.map(
    (elm) => elm.charAt(0).toUpperCase() + elm.slice(1).toLowerCase()
  );
  return jadenCaseRes.join(" ");
}
