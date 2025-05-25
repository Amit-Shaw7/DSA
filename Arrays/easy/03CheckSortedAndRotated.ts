export {};

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// leetcode - https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

const check = (nums: number[]): boolean => {
  let rotationIdx: number | null = null;

  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];
    if (current > next) {
      rotationIdx = i;
      break;
    }
  }

  if (rotationIdx !== null) {
    if (nums[0] < nums[nums.length - 1]) {
      return false;
    }
  }

  for (
    let i = rotationIdx !== null ? rotationIdx + 1 : 0;
    i < nums.length - 1;
    i++
  ) {
    const current = nums[i];
    const next = nums[i + 1];
    if (current > next) {
      return false;
    }
  }

  return true;
};

const nums: number[] = [3, 4, 5, 1, 2];
const result: boolean = check(nums);
console.log(result);
