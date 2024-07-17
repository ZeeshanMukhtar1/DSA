---
id: big-o-n
title: O(n) Complexity
sidebar_position: 3
---

## O(n) Complexity

O(n) denotes linear complexity. The running time of the algorithm increases linearly with the size of the input.

### Diagram

<!-- ![O(n) Diagram](path_to_o_n_diagram) -->

### In Action (Coding)

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

### Drop the Constants

When analyzing O(n) complexity, constants are dropped. For example, O(2n) simplifies to O(n).
