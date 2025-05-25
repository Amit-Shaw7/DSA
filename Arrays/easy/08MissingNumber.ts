/**
 * @param {number[]} nums
 * @return {number}
 */

// leetcode - https://leetcode.com/problems/missing-number

function missingNumberBrute(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let flag = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === i) {
        flag = 1;
        break;
      }
    }

    if (flag === 0) {
      return i;
    }
  }
  return nums.length;
}

function missingNumberBetterUsingHashArray(nums: number[]): number {
  let newArr = Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    newArr[nums[i]] = 1;
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 0) {
      return i;
    }
  }

  return nums.length;
}

function missingNumberOptimizedSummationApproach(nums: number[]): number {
  let sum = 0;
  let n = nums.length;
  let total = (n * (n + 1)) / 2;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return total - sum;
}

let nums: number[] = [0, 1];
const missing1 = missingNumberBrute(nums);
const missing2 = missingNumberBetterUsingHashArray(nums);
const missing3 = missingNumberOptimizedSummationApproach(nums);
console.log(missing1);
console.log(missing2);
console.log(missing3);
