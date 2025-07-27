function createCounter() {
  let count = 0; // Private variable

  return {
    // Method to increment count
    increment() {
      count++;
      return count;
    },

    // Method to get current count
    getCount() {
      return count;
    }
  };
}


const counter = createCounter();

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.getCount());  // Output: 2

// Try accessing count directly (should be undefined)
console.log(counter.count);       // Output: undefined
