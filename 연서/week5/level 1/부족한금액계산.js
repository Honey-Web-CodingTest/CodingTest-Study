//가우스 공식 (등차수열의 합 = (첫항 + 마지막항) * (항의 개수) / 2)
function solution(price, money, count) {
  //가우스 공식 활용 부분
  const tmp = (price * (count + 1) * count) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
