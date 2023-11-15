// Lv 1. 푸드 파이트 대회 - 연습문제
function solution(food) {
  let perFood = [];
  for (let i = 1; i < food.length; i++) {
    perFood.push(i.toString().repeat(Math.floor(food[i] / 2)));
  }
  return perFood.join("") + "0" + perFood.reverse().join("");
}
