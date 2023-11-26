function solution(n) {
  const cntOneBinary = (num) => num.toString(2).replace(/0/gi, "").length;

  let answer = n + 1;

  while (answer > n) {
    if (cntOneBinary(answer) === cntOneBinary(n)) return answer;
    answer++;
  }
}
