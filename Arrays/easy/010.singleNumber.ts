export {};

// leetcode - https://leetcode.com/problems/single-number/description/

function singleNumberBrute(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let curNum = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === curNum) {
        count++;
      }
    }

    if (count === 1) {
      return curNum;
    }
  }
  return -1;
}

function singleNumberBetterUsingHashing(nums: number[]): number {
  // will not wok if negative element present
  let maxNum = 0;

  for (let i = 0; i < nums.length; i++) {
    maxNum = Math.max(maxNum, nums[i]);
  }

  let hash = Array(maxNum + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]]++;
  }

  for (let i = 0; i < hash.length; i++) {
    if (hash[i] === 1) {
      return i;
    }
  }
  return -1;
}

function singleNumberBetterUsingMap(nums: number[]): number {
  let map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }

  return -1;
}

function singleNumberOptimalUsingXOR(nums: number[]): number {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
}

let nums: number[] = [4, 1, 2, 1, 2];

const num1 = singleNumberBrute(nums);
console.log(num1);

const num2 = singleNumberBetterUsingHashing(nums);
console.log(num2);

const num3 = singleNumberBetterUsingMap(nums);
console.log(num3);

const num4 = singleNumberOptimalUsingXOR(nums);
console.log(num4);
