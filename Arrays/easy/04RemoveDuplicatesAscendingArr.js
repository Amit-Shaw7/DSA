/**
 * @param {number[]} nums
 * @return {number}
 */

// leetcode - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
const removeDuplicates = function (nums) {
  let start = 0;
  let end = 1;

  while (end < nums.length) {
    if (nums[start] === nums[end] || nums[end] < nums[start]) {
      end++;
    } else {
      let temp = nums[start + 1];
      nums[start + 1] = nums[end];
      nums[end] = temp;
      start++;
    }
  }

  return start + 1;
};

const nums = [1,2];
const k = removeDuplicates(nums);

for (let i = 0; i < k; i++) {
  console.log(nums[i]);
}
