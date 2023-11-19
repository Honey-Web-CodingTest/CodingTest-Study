function solution(a, b) {
  // current value 인자에 _을 넣어서 빈 인자 값으로, idx 사용해서 곱하기
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
