---
id: big-o-n2
title: O(n^2) Complexity
sidebar_position: 5
---

## O(n^2) Complexity

O(n^2) denotes quadratic time complexity. The running time of the algorithm is proportional to the square of the input size.

### In Action (Coding)

```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```
