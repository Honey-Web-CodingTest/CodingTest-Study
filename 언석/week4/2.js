const solution = function foundNumber(array, commands) {
  const ANS_ARR = [];

  commands.forEach((arr) => {
    const NEW_ARR = array.slice(arr[0] - 1, arr[1]);
    NEW_ARR.sort((a, b) => a - b);

    ANS_ARR.push(NEW_ARR[arr[2] - 1]);
  })

  return ANS_ARR;
}

console.log(solution([1, 1, 1, 6, 1, 1, 1], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	));


/**
 * slice()
 * 배열로 부터 특정 범위를 복사한 값들을 담고 있는 새로운 배열을 만든다.
 * arr.slice(startIndex, endIndex?); (startIndex ~ endIndex - 1)
 * splice()와는 달리 원본을 건들이지 않는다.
 * 
 * splice()
 * 특정 범위를 삭제하거나 새로운 값을 추가하거나 기존의 값을 대체할 수 있다.
 * splice(startIndex, deleteNum?, add1?, add2?, ...);
 * num.splice(5, 0, -5, -6, -7); // index 5부터 0개 삭제하고, -5, -6, -7 추가.
 * num.splice(5, 2, -10, -11); // index 5부터 2개 삭제하고, -10, -11 추가.
 * 
 * sort()
 * 정렬 후 그 배열을 반환.
 * const arr = [1, 3, 2];
 * arr.sort();
 * console.log(arr); // [1, 2, 3]
 * 
 * !!주의!!
 * console.log([1, 2, 111].sort()); // [1, 111, 2]
 * 문자열로 형변환한 후 정렬을 실행하기 때문.
 * arr.sort((a, b) => a - b); 이런 식으로 해주면 된다.
 */