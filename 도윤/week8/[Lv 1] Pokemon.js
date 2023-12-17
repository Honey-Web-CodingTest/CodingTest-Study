// Lv 1. 포켓몬 - 해시
function solution(nums) {
  const numSets = new Set(nums);
  const maxCount = Math.floor(nums.length / 2);

  return numSets.size > maxCount ? maxCount : numSets.size;
}
