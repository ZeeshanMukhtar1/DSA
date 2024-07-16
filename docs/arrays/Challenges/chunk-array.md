---
id: chunk-array
title: Chunk Array
sidebar_position: 7
---


### Challenge Description

Write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunks of the specified size.

For example:

- `chunk([1, 2, 3, 4, 5], 2)` should return `[[1, 2], [3, 4], [5]]`.
- `chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)` should return `[[1, 2, 3], [4, 5, 6], [7, 8]]`.

### Tips to Solve

:::tip

1. Initialize an empty array `chunked` to store the chunks.
2. Use a `while` loop to iterate through the original array.
3. Use the `slice` method to create chunks of the specified size and push them into the `chunked` array.
4. Increment the index by the chunk size to move to the next chunk.
   :::

### Step-by-Step Solution

Let's break down the solution into easy steps:

1. **Initialize Variables**:
   - Create an empty array `chunked` to store the chunks.
   - Initialize an `index` variable to 0 to keep track of the current position in the original array.
   ```javascript
   const chunked = [];
   let index = 0;
   ```

2. **Iterate Through the Array**:

   - Use a `while` loop to iterate through the original array.
   - The loop should run as long as the `index` is less than the length of the array.

   ```javascript
   while (index < array.length) {
     const chunk = array.slice(index, index + size);
     chunked.push(chunk);
     index += size;
   }
   ```

3. **Slice the Array**:

   - Use the `slice` method to create a chunk of the specified size starting from the current `index`.
   - Push the chunk into the `chunked` array.

   ```javascript
   const chunk = array.slice(index, index + size);
   chunked.push(chunk);
   ```

4. **Increment the Index**:

   - Increment the `index` by the chunk size to move to the next chunk.

   ```javascript
   index += size;
   ```

5. **Return the Chunked Array**:
   - After the loop completes, return the `chunked` array.
   ```javascript
   return chunked;
   ```

### Full Solution Code

Here is the complete solution using the steps above:

```javascript
const chunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }

  return chunked;
};

console.log(chunk([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // Output: [[1, 2, 3], [4, 5, 6], [7, 8]]
```

