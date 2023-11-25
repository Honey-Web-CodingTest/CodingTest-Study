function solution(clothes) {
  const map = new Map(); //해시 자료구조 구현을 위한 Map 객체 생성

  let cnt = 1;

  for (let [cloth, type] of clothes) {
    if (map.has(type)) {
      map.set(type, map.get(type) + 1);
    } else {
      map.set(type, 1);
    }
  }

  for (let i of map.values()) {
    cnt *= i + 1;
  }

  return cnt - 1;
}
