function solution(arr) {
  // 유클리드호제법으로 최대공약수 구하기
  const gcd = (a, b) => {
    return a % b ? gcd(b, a % b) : b;
  };

  // 최대공배수는 두 수의 곱 / 최대공약수
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}
