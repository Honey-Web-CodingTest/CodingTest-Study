//Lv 1. 소수 만들기 - Summer/Winter Coding(~2018)
function findPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (findPrime(nums[i] + nums[j] + nums[k])) answer++;
      }
    }
  }
  return answer;
}
