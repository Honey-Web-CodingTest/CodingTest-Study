// Lv 1. 옹알이(2) - 연습문제
function solution(babbling) {
  const babblingList = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (bab of babbling) {
    for (word of babblingList) {
      if (bab.includes(word.repeat(2))) {
        break;
      }
      bab = bab.split(word).join(" ");
    }
    if (bab.split(" ").join("").length === 0) {
      count++;
    }
  }
  return count;
}
