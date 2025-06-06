export {};

// leetcode -  https://leetcode.com/problems/max-consecutive-ones/

function findMaxConsecutiveOnes(nums: number[]): number {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }

  return Math.max(count, maxCount);
}

let nums: number[] = [1, 1, 0, 1, 1, 1];
const maxCount = findMaxConsecutiveOnes(nums);
console.log(maxCount);
