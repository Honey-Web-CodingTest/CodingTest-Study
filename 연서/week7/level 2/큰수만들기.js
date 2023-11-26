function solution(number, k) {
  let stack = [];
  for (let i = 0; i < number.length; i++) {
    let value = number[i];
    //마지막 숫자와 현재 숫자를 비교하며 현재 숫자가 더 크면 해당 숫자를 pop
    while (k > 0 && stack[stack.length - 1] < value) {
      // 현재 숫자보다 큰 수가 나올때까지 최대 k번 반복
      stack.pop();
      k--;
    }
    stack.push(value);
  }
  // 모든 숫자를 비교한 후 k가 0보다 크면 남은 k만큼 뒤에서 제거
  stack.splice(stack.length - k, k);
  return stack.join("");
}
