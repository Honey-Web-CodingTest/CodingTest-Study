// Lv 2. 구명보트 - 탐욕법(Greedy)
function solution(people, limit) {
  let count = 0;
  let j = people.length - 1;
  people.sort((a, b) => b - a);

  for (let i = 0; i <= j; i++) {
    people[i] + people[j] <= limit && j--;
    count++;
  }
  return count;
}
