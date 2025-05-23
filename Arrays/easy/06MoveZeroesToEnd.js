/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroesBrute = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      let idx = i;

      while (idx < n - 1) {
        let temp = nums[idx];
        nums[idx] = nums[idx + 1];
        nums[idx + 1] = temp;
        idx++;
      }

      n--;
    }
  }
};

var moveZeroesOptimal = function (nums) {
  let n = nums.length;
  let indexOfZero = nums?.findIndex((num) => num === 0);

  console.log("zero  index : " + indexOfZero);

  if (indexOfZero < 0 || nums.length === 1) return;

  let indexOfNextToZero = indexOfZero + 1;

  for (let i = indexOfNextToZero; i < n; i++) {
    if (nums[indexOfNextToZero] !== 0) {
      let temp = nums[indexOfNextToZero];
      nums[indexOfNextToZero] = nums[indexOfZero];
      nums[indexOfZero] = temp;
      indexOfZero++;
    }
    indexOfNextToZero++;
  }
};

const nums = [0, 0, 1];
// let nums = [0, 12, 0, 0, 0, 0, 0, 12];

moveZeroesOptimal(nums);
console.log(nums);
