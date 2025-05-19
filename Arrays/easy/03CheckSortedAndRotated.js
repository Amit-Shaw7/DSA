/**
 * @param {number[]} nums
 * @return {boolean}
 */

// leetcode - https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

var check = function (nums) {
  let rotationIdx = null;
  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];
    if (current > next) {
      rotationIdx = i;
      break;
    }
  }

  if (rotationIdx || rotationIdx === 0) {
    if (nums[0] < nums[nums.length - 1]) {
      return false;
    }
  }

  for (let i = rotationIdx + 1; i < nums.length; i++) {
    const current = nums[i];
    const next = nums[i + 1];
    if (current > next) {
      return false;
    }
  }

  return true;
};

const nums = [3, 4, 5, 1, 2];
const result = check(nums);
console.log(result);
