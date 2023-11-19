function solution(n, a, b) {
  let answer = 0;

  // N/2를 계속해서 반복하여 같은 번호 라운드를 획득 할 때 종료된다
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
