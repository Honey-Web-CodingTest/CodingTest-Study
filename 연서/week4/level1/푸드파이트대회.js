function solution(food) {
  const carlories = food.slice(1);
  let halfAnswer = "";

  // 각 음식 별 배치 구하기
  carlories.map((el, idx) => {
    halfAnswer += ("" + (idx + 1)).repeat(el / 2);
  });

  return halfAnswer + "0" + halfAnswer.split("").reverse().join("");
}

//다른 풀이 (비슷한 방식)
// function solution(food) {
//     let res = '';
//     for (let i = 1; i < food.length; i++) {
//         res += String(i).repeat(Math.floor(food[i]/2));
//     }

//     return res + '0' + [...res].reverse().join('');
// }
