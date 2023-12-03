function solution(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  //소수인지 판별
  return arr.filter((v) => {
    if (v < 2) return false;

    for (let i = 2; i <= Math.sqrt(v); i++) {
      if (v % i === 0) return false;
    }
    return true;
  }).length;
}
