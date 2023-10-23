function solution(arr1, arr2) {
  //arr1의 길이 = arr2의 길이이므로 idx로 접근 가능!
  return arr1.map((rows, rowIdx) =>
    rows.map((el, colIdx) => el + arr2[rowIdx][colIdx])
  );
}
