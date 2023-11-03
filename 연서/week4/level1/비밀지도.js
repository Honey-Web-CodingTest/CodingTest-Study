function solution(n, arr1, arr2) {
  const tempArr1 = arr1.map((num) => num.toString(2).padStart(n, 0));
  const tempArr2 = arr2.map((num) => num.toString(2).padStart(n, 0));

  const answer = tempArr1.map((num, numIdx) => {
    return num
      .split("")
      .map((string, stringIdx) => {
        return (string | tempArr2[numIdx][stringIdx]) === 1 ? "#" : " ";
      })
      .join("");
  });

  return answer;
}

//다른 풀이 -> 정규표현식 사용
// function solution(n, arr1, arr2) {
//     return arr1.map((v, i) => (v | arr2[i]).toString(2).padStart(n,0).replace(/1|0/g, a => +a ? '#' : ' '));
// }
