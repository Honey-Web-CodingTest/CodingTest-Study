// https://school.programmers.co.kr/learn/courses/30/lessons/12921
// 소수 찾기
const solution = (n) => {
  let count = 1;
  
  for (let i = 3; i <= n; i += 2) {
    let isPrime = true;

    if (isPrime % 2 === 0) {
      isPrime = false;
      break;
    }

    for (let j = 3; j <= Math.sqrt(i); j += 2) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) count++;
  }

  return count;
}

// 다른 사람 풀이
// 소거법 이용
function solution(n) {
  const s = new Set();
  for(let i=1; i<=n; i+=2){
      s.add(i);
  }
  s.delete(1);
  s.add(2);
  for(let j=3; j<Math.sqrt(n); j++){
    if(s.has(j)){
      for(let k=j*2; k<=n; k+=j){    
        s.delete(k);
      }
    }
  }
  return s.size;
}