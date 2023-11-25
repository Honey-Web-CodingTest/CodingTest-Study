// Lv 2. 짝지어 제거하기 - 2017 탑스타운
function solution(s) {
  //stack 사용
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}
