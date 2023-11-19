function solution(s) {
  const answer = [];

  for (const i of s) {
    //여는 괄호인 경우 answer 배열(스택)에 넣음
    if (i === "(") {
      answer.push(i);
    } else {
      //여는 괄호가 아닌 닫힌 괄호이면 answer 배열에서 제거,
      //단 answer 배열이 비어 있는 상태면 올바르지 않은 배열(앞에서 여는 배열이 없음)이므로 false
      if (answer.length === 0) return false;
      // 닫힌 괄호가 올바른 순서로 온 경우 다시 answer 배열(스택)에서 제거
      answer.pop();
    }
  }
  // loop를 모두 돌았을 때 스택에서 모두 올바른 순서로 제거되어 answer 배열(스택)이 비어 있으면 true, 아니면 false
  return answer.length === 0;
}
