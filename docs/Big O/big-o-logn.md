---
id: big-o-logn
title: O(log n) Complexity
sidebar_position: 6
---

## O(log n) Complexity

O(log n) denotes logarithmic complexity. The execution time of the algorithm increases logarithmically as the input size grows.

### Divide & Conquer

Logarithmic complexity often appears in divide-and-conquer algorithms, such as binary search.

### Example

Consider a binary search algorithm:

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
