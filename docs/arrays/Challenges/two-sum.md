---
id: two-sum
title: Two Sum
sidebar_position: 8
---

### Challenge Description

Given a list of numbers and a target number, your job is to find two numbers in that list that add up to the target number. You also need to tell which positions (or indices) those two numbers are at in the list.

For example:

- `twoSum([2, 7, 11, 15], 9)` should return `[0, 1]` because 2 + 7 = 9.
- `twoSum([1, 3, 7, 9, 2], 11)` should return `[3, 4]` because 9 + 2 = 11.

### Tips to Solve

:::tip

1. Use a nested loop to iterate through each number in the list.
2. For each number, check the rest of the list to find a pair that adds up to the target.
3. If a pair is found, return their indices.
4. If no pair is found, return an empty array.
   :::

### Step-by-Step Solution

Let's break down the solution into easy steps:

1. **Initialize Loop**:

   - Use a `for` loop to iterate through each number in the list.
   - Use a nested `for` loop to check the rest of the list for a pair that adds up to the target.

   ```javascript
   for (let i = 0; i < nums.length; i++) {
     for (let j = i + 1; j < nums.length; j++) {
   ```

2. **Check for Target Sum**:

   - Inside the nested loop, check if the sum of the current number and the number being checked equals the target.

   ```javascript
   if (nums[i] + nums[j] === target) {
     return [i, j];
   }
   ```

3. **Return Indices**:

   - If a pair is found, return their indices.

   ```javascript
   return [i, j];
   ```

4. **Return Empty Array**:
   - If no matching pair is found, return an empty array.
   ```javascript
   return [];
   ```

### Full Solution Code

Here is the complete solution using the steps above:

```javascript
function twoSum(nums, target) {
  // Loop through each number in the list
  for (let i = 0; i < nums.length; i++) {
    // For each number, check the rest of the list
    for (let j = i + 1; j < nums.length; j++) {
      // If the current number and the one we're checking add up to the target, return their indexes
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // If no matching pair is found, return an empty array
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([1, 3, 7, 9, 2], 11)); // Output: [3, 4]
```
