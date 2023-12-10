// Lv 1. 두 개 뽑아서 더하기
function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!answer.includes(numbers[i] + numbers[j])) {
        answer.push(numbers[i] + numbers[j]);
      } else {
        continue;
      }
    }
  }
  return answer.sort((a, b) => a - b);
}
