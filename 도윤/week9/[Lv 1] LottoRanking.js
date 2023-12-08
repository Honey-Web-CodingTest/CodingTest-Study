// Lv 1. 로또의 최고 순위와 최저 순위 - 2021 Dev-Matching: 웹 백엔드 개발자(상반기)
const calculateRank = (count) => {
  switch (count) {
    case 2:
      return 5;
    case 3:
      return 4;
    case 4:
      return 3;
    case 5:
      return 2;
    case 6:
      return 1;
    default:
      return 6;
  }
};

function solution(lottos, win_nums) {
  const new_lottos = lottos.filter((elm) => elm !== 0);
  const zero_nums = lottos.length - new_lottos.length;
  let count = 0;

  new_lottos.forEach((num) => {
    if (win_nums.includes(num)) {
      win_nums.splice(win_nums.indexOf(num), 1);
      count++;
    }
  });

  let min = 0,
    max = 0;
  if (count === 6) {
    return [1, 1];
  } else {
    min = count;
    max = count + zero_nums;
    return [calculateRank(max), calculateRank(min)];
  }
}
