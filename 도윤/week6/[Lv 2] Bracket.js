// Lv 2. 올바른 괄호 - 스택/큐
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack[stack.length - 1] === "(" && s[i] === ")"
      ? stack.pop()
      : stack.push(s[i]);
  }

  return stack.length === 0 ? true : false;
}

/*
효율성 검사 통과 풀이
function solution(s){
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        (stack[stack.length-1] === "(" && s[i] === ")") ? stack.pop() : stack.push(s[i]);

    }
    
    return !stack.length;
} */
