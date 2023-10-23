// https://school.programmers.co.kr/learn/courses/30/lessons/87389
// [Lv.1] 나머지가 1이 되는 수 찾기

// 제출 답변
const solution = (n) => {
  for (let ans = 2; ans < n; ans++) {
    if (n % ans === 1) return ans;
  }
}

// 오류 해결 과정
// const solution = (n) => {
//   for (let ans = 2; ans++;) {
//     if (n % ans === 1) return ans;
//   }
// }
// 

/* 
위와 같이 작성을 하였는데, 이상하게 console.log(solution(3));이 무한루프에 빠지는 것이었다
아무리 봐도 잘못된 부분이 없는데 왜 그럴까 하고 몇 분 간 붙잡고 있었다
for (let ans = 1; ans++;)로 하고 푸니 정답 처리는 돼서 답변을 찾아 봤더니
for 속성 순서를 바꿔 써서 그런 것이었다

JS 안 한 지 오래 되어서 실력 많이 줄었다고는 생각했었는데 이정도 일 거라고는 생각도 못했다,,
진짜 너무 멍청했고~
*/

// 다른 풀이
// const solution(n, x = 1) {
//   while (x++) {
//     if (n % x === 1) return x;
//   }
// }
// 