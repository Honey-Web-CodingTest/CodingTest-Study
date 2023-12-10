function solution(prices) {
  let answer = [];

  let idx = 0;

  while (idx < prices.length) {
    let time = 0;
    for (let i = idx + 1; i < prices.length; i++) {
      if (prices[idx] > prices[i]) {
        time++;
        break;
      } else {
        time++;
      }
    }
    answer.push(time);
    idx++;
  }

  return answer;
}
