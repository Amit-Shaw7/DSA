export {};
const largestElement = (nums: number[]): number => {
  let largest: number = nums[0];

  for (let i: number = 1; i < nums.length; i++) {
    if (largest < nums[i]) {
      largest = nums[i];
    }
  }

  return largest;
};

const nums: number[] = [1, 2, 3, 4, 5];
const largest: number = largestElement(nums);
console.log(largest);
