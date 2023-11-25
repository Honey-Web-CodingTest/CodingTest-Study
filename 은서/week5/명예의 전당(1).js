function solution(k, score) {
  const honor = [];
  const ans = [];

  score.forEach((n) => {
    honor.push(n);
    honor.sort((a, b) => b - a);

    if (honor.length >= k) {
      ans.push(honor[k - 1]);
    } else {
      ans.push(honor[honor.length - 1]);
    }
  });

  return ans;
}
