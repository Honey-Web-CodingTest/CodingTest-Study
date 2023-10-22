function solution(people, limit) {
  let answer = 0;

  // 내림차순 정렬
  people.sort((a, b) => b - a);

  let l = 0;
  let r = people.length - 1;

  while (l < r) {
    //가장 큰 수 + 가장 작은 수 더한 값을 기준으로 판별
    let sum = people[l] + people[r];

    // limit을 넘으면 가장 큰 수 만, limit을 넘지 않는 다면 가장 작은 수, 가장 큰 수 모두 태움
    if (sum > limit) {
      l++;
    } else {
      l++;
      r--;
    }

    // 구명보트의 수 추가
    answer++;
  }

  // 계산되지 않은 마지막 숫자가 다 끝나면, 구명보트 수 하나 추가하고 return
  if (l == r) answer++;
  return answer;
}
