---
id: big-o-1
title: O(1) Complexity
sidebar_position: 4
---

## O(1) Complexity

O(1) denotes constant time complexity. The execution time of an algorithm remains constant regardless of the input size.

### Example

Consider an array of numbers:

```javascript
const numbers = [1, 2, 3, 4, 5];
const getElement = (arr, index) => arr[index];
console.log(getElement(numbers, 0)); // Output: 1
```
