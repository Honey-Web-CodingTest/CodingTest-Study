// Lv 1. 대충 만든 자판 - 연습문제

const setKeymap = (keymap) => {
  const keyLocation = new Map();

  keymap.forEach((key) => {
    for (let i = 0; i < key.length; i++) {
      if (!keyLocation.has(key[i]) || i + 1 < keyLocation.get(key[i])) {
        keyLocation.set(key[i], i + 1);
      }
    }
  });
  return keyLocation;
};

function solution(keymap, targets) {
  const result = [];
  const keyLocation = setKeymap(keymap);
  let count;

  targets.forEach((target) => {
    count = 0;
    for (let i = 0; i < target.length; i++) {
      count += keyLocation.get(target[i]);
    }

    isNaN(count) ? result.push(-1) : result.push(count);
  });
  return result;
}
