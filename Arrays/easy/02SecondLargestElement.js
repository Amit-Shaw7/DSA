const secondLargestElement = (nums) => {
  let largestNum = 0;
  let secondLargestNum = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (largestNum < currentNum) {
      largestNum = currentNum;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === largestNum) continue;

    const currentNum = nums[i];
    if (secondLargestNum < currentNum) {
      secondLargestNum = currentNum;
    }
  }

  return secondLargestNum;
};

const nums = [1, 2, 3, 4, 5];
const largest = secondLargestElement(nums);
console.log(largest);
