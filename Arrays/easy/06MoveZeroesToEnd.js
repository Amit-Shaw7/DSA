/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      let idx = i;

      while (idx < n -1) {
        let temp = nums[idx];
        nums[idx] = nums[idx + 1];
        nums[idx + 1] = temp;
        idx++;
      }

      n--;
    }
  }
};

const nums = [0,0,1]
// const nums = [1,3,12,0,0]
moveZeroes(nums);
console.log(nums);
