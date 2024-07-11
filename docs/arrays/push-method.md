---
id: push-method
title: Push Method
sidebar_position: 2
---

## Push Method

The `push` method adds an item to the end of the array.

```javascript
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
}

const myArray = new MyArray();
myArray.push("apple");
myArray.push("banana");
console.log(myArray);
```

### output

```bash
MyArray { length: 2, data: { '0': 'apple', '1': 'banana' } }
```
