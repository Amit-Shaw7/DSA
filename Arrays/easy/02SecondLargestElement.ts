export {};
const secondLargestElement = (nums: number[]): number => {
  let largestNum: number = 0;
  let secondLargestNum: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    const currentNum: number = nums[i];
    if (largestNum < currentNum) {
      largestNum = currentNum;
    }
  }

  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === largestNum) continue;

    const currentNum: number = nums[i];
    if (secondLargestNum < currentNum) {
      secondLargestNum = currentNum;
    }
  }

  return secondLargestNum;
};

const nums: number[] = [1, 2, 3, 4, 5];
const largest: number = secondLargestElement(nums);
console.log(largest);
