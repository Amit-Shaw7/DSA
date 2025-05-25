// Striver sde sheet - https://takeuforward.org/data-structure/union-of-two-sorted-arrays/

const findUnionUsingMap = (arr1: number[], arr2: number[]): number[] => {
  let union: number[] = [];
  let freq: Map<number, number> = new Map();

  for (let i: number = 0; i < arr1.length; i++) {
    freq.set(arr1[i], freq.get(arr1[i]) || 1);
  }

  for (let i: number = 0; i < arr2.length; i++) {
    freq.set(arr2[i], freq.get(arr2[i]) || 1);
  }

  for (let [key, value] of freq) {
    union.push(key);
  }

  return union;
};

const findUnionUsingSet = (arr1: number[], arr2: number[]): number[] => {
  let set: Set<number> = new Set();
  let union: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    set.add(arr2[i]);
  }

  set.forEach((item) => {
    union.push(item);
  });

  return union;
};

const findUnionUsingTwoPointers = (
  arr1: number[],
  arr2: number[]
): number[] => {
  let i = 0;
  let j = 0;
  let union: number[] = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] >= arr2[j]) {
      if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    }
    if (arr2[j] >= arr1[i]) {
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    }
  }

  while (i < arr1.length) {
    if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
      union.push(arr1[j]);
    }
    j++;
  }

  return union;
};

let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: number[] = [2, 3, 4, 4, 5, 6, 7];
const union1 = findUnionUsingMap(arr1, arr2);
const union2 = findUnionUsingSet(arr1, arr2);
const union3 = findUnionUsingTwoPointers(arr1, arr2);
console.log(union3);
