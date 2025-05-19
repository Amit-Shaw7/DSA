/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Leetcode -  https://leetcode.com/problems/rotate-numsay/
let count = 0;
var rotateBrute = function (nums, k) {
  if (k % nums.length === 0) {
    return;
  } else if (k > nums.length) {
    k = k % nums.length;
  }

  for (let j = 0; j < k; j++) {
    for (let i = nums.length - 1; i > 0; i--) {
      const temp = nums[i];
      nums[i] = nums[i - 1];
      nums[i - 1] = temp;
    }
  }
};

var rotateOptimal = function (nums, k) {
  k = k % nums.length; // Normalize k

  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  reverse(0, nums.length - 1); // Reverse entire array
  reverse(0, k - 1); // Reverse first k elements
  reverse(k, nums.length - 1); // Reverse the rest
};

let k = 3;
let nums = [1, 2, 3, 4, 5, 6, 7];

// rotate(nums, k);
rotateOptimal(nums, k);
console.log(nums);
