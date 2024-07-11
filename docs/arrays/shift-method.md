---
id: shift-method
title: Shift Method
sidebar_position: 5
---

## Shift Method

The `shift` method removes the first item from the array and returns its value.

```javascript
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  shift() {
    const firstElement = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }
}

const myArray = new MyArray();
myArray.push("apple");
myArray.push("banana");
console.log(myArray.shift()); // "apple"
console.log(myArray);
```

### output

```bash
MyArray { length: 1, data: { '0': 'banana' } }
```
