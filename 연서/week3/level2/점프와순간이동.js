function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2; //2의 배수 = 짝수로 이동할 수 있을만큼(에너지 0)처리
    } else {
      n--; //홀수 일 경우 1 이동(에너지 1)
      answer++;
    }
  }

  return answer;
}

//다른 풀이 -> 이진수(시프트 연산으로 풀기)
//이진수로 바꾸면 -> 1이 나오는 위치에서 1칸 이동(에너지 1), 0이 나오는 위치에서 2배 이동(에너지 0)
// 즉, 답은 n을 이진수로 바꿨을 때의 1의 갯수...!

// function solution(n){
//     if(n === 1) return 1;
//     const nArr = Array.from(n.toString(2));
//     return nArr.reduce((a,b)=>(+a)+(+b));
// }
