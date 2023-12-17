// Lv 2. 영어 끝말잇기 - Summer/Winter Coding(~2018)
function solution(n, words) {
  const password = [words[0]];
  let len = words[0].length;
  let last_letter = words[0][len - 1];
  let turn = 1;

  for (let i = 1; i < words.length; i++) {
    len = words[i].length;

    // 끝말잇기 규칙에 맞는 단어인지 체크
    if (last_letter !== words[i][0]) {
      return [(i % n) + 1, turn];
    }

    // 이미 나온 단어인지 체크
    if (password.includes(words[i])) {
      return [(i % n) + 1, turn];
    }

    password.push(words[i]);
    last_letter = words[i][len - 1];

    if ((i % n) + 1 === n) {
      turn++;
    }
  }
  return [0, 0];
}
