const largestElement = (nums) => {
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (largest < nums[i]) {
      largest = nums[i];
    }
  }

  return largest;
};

const nums = [1, 2, 3, 4, 5];
const largest = largestElement(nums);
console.log(largest);
