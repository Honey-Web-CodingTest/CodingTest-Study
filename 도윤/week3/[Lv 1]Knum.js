//Lv 1. K번째수 - 정렬
function solution(array, commands) {
  let res = [],
    tmp = [];
  let start = 0,
    end = 0;
  commands.forEach((elm) => {
    start = elm[0] - 1;
    end = elm[1] - 1;
    tmp = array.slice(start, end + 1).sort((a, b) => a - b);
    res.push(tmp[elm[2] - 1]);
  });
  return res;
}
