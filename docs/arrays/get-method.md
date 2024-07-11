---
id: get-method
title: Get Method
sidebar_position: 3
---

## Get Method

The `get` method retrieves an item from the array by its index.

```javascript
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(idx) {
    return this.data[idx];
  }
}

const myArray = new MyArray();
myArray.push("apple");
console.log(myArray.get(0));
```

### output

```bash
"apple";
```
