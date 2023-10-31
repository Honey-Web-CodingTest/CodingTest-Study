function solution(numbers) {
  let addNums = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      addNums.push(numbers[i] + numbers[j]);
    }
  }

  let answer = [...new Set(addNums)].sort((a, b) => a - b); //Set으로 중복 제거, sort로 정렬

  return answer;
}
