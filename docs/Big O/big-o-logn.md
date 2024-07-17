---
id: big-o-logn
title: O(log n) Complexity
sidebar_position: 6
---

## O(log n) Complexity

### In Depth

O(log n) denotes logarithmic complexity. The running time of the algorithm increases logarithmically as the input size grows.

### Diagram

<!-- ![O(log n) Diagram](path_to_o_logn_diagram) -->

### Divide & Conquer

Logarithmic complexity often appears in divide-and-conquer algorithms, such as binary search.

### In Action (Coding)

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```
