let arr: number[] = [5, 6, 4, 2, 3, 5, 66, 90];
let target: number = 66;

const searchLinearly = (arr: number[], target: number): number => {
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

const idx: number = searchLinearly(arr, target);
if (idx < 0) {
  console.log("Element not found");
} else {
  console.log("Element found at index : ", idx);
}
