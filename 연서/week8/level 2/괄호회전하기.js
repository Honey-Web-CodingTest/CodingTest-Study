function solution(s) {
  if (s.length % 2 === 1) return 0;

  let answer = 0;
  const correctSet = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    const rotate = s.slice(i) + s.slice(0, i);
    let flag = true;
    rotate.split("").forEach((target) => {
      if (target === "{" || target === "[" || target === "(") {
        stack.push(target);
      } else {
        if (stack.pop() !== correctSet[target]) {
          flag = false;
          return;
        }
      }
    });

    if (flag) answer++;
  }
  return answer;
}
