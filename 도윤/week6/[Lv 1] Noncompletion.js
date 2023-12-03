// Lv 1. 완주하지 못한 선수 - 해시
function solution(participant, completion) {
  let answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

// 첫번째 풀이 - 효율성 검사 통과 X
// function solution(participant, completion){
//   let idx = -1;
//   let answer = "";
//   participant.forEach((elm)=> {
//       if(completion.includes(elm)){
//           idx = completion.indexOf(elm);
//           completion.splice(idx, 1);
//       }else{
//           answer = elm;
//       }
//   })
//   return answer;
// }
