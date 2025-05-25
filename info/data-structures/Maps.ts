// Calculating time to find for a elem in Map

const map: Map<number, string> = new Map();

// Fill the map with 1 million entries
for (let i: number = 0; i < 1_000_000; i++) {
  map.set(i, `value${i}`);
}

const keyToFind = 999_999;

// Measure time for map.get()
const start = performance.now();
const value = map.get(keyToFind);
const end = performance.now();

console.log(`Found value: ${value}`);
console.log(`Time taken to find: ${end - start} milliseconds`);
