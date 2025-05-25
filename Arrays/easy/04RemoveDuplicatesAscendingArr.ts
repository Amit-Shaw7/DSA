export {};

/**
 * @param {number[]} nums
 * @return {number}
 */

// leetcode - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
const removeDuplicates = (nums: number[]): number => {
  let start: number = 0;
  let end: number = 1;

  while (end < nums.length) {
    if (nums[start] === nums[end] || nums[end] < nums[start]) {
      end++;
    } else {
      const temp: number = nums[start + 1];
      nums[start + 1] = nums[end];
      nums[end] = temp;
      start++;
    }
  }

  return start + 1;
};

const nums: number[] = [1, 2];
const k: number = removeDuplicates(nums);

for (let i: number = 0; i < k; i++) {
  console.log(nums[i]);
}
