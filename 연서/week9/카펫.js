function solution(brown, yellow) {
  let carpet = brown + yellow;
  let w, h;

  for (let h = 3; h < brown; h++) {
    if (carpet % h === 0) {
      w = carpet / h;

      if ((w - 2) * (h - 2) === yellow) return [w, h];
    }
  }
}
