// Lv 1. 체육복 - 탐욕법(Greedy)
function solution(n, lost, reserve) {
  //가져왔는데 도난당한 경우 (reserve와 lost에서 모두 제거)
  let newReserve = reserve
    .filter((elm) => {
      return !lost.includes(elm);
    })
    .sort((a, b) => a - b);

  let newLost = lost
    .filter((elm) => {
      return !reserve.includes(elm);
    })
    .sort((a, b) => a - b);

  //answer의 초기값: 총 n명 중 가져오지 않은 사람(가져왔는데 도난당한 사람 제외)
  let answer = n - newLost.length;

  newLost.forEach((elm) => {
    if (newReserve && newReserve.includes(elm - 1)) {
      answer++;
      newReserve = newReserve.filter((res) => res !== elm - 1);
    } else if (newReserve && newReserve.includes(elm + 1)) {
      answer++;
      newReserve = newReserve.filter((res) => res !== elm + 1);
    }
  });
  return answer;
}
