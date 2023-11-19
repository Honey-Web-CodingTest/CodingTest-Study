// Lv 2. 숫자의 표현 - 연습문제

// 나의 풀이 (효율성 겁사 통과 X)
function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum >= n && sum === n) {
        cnt++;
      }
    }
  }
  return cnt;
}

/* 참고할 풀이 : 주어진 자연수를 연속되는 자연수들의 합으로 표현할 수 있는 방법의 수는 주어진 자연수의 약수 중에서 홀수인 수의 개수와 같다 */
function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    n % i === 0 && i % 2 === 1 ? cnt++ : null;
  }
  return cnt;
}
