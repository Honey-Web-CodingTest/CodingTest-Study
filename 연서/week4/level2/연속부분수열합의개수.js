function solution(elements) {
  const answer = new Set();

  const circular = [...elements, ...elements];

  circular.forEach((num, idx) => {
    if (idx < elements.length) {
      for (let i = 0; i < elements.length; i++) {
        // 각각의 순회마다 i부터 idx만큼 잘라서 slice 배열을 반환한 값을 set 자료구조에 저장
        const slice = circular.slice(i, i + idx + 1);
        answer.add(slice.reduce((acc, val) => acc + val, 0));
      }
    }
  });

  return answer.size;
}

//다른 풀이
// function solution(elements) {
//     const circular = elements.concat(elements);
//     const set = new Set();
//     for (let i = 0; i < elements.length; i++) {
//         let sum = 0;
//         for (let j = 0; j < elements.length; j++) {
//             sum += circular[i + j];
//             set.add(sum);
//         }
//     }
//     return set.size;
// }
