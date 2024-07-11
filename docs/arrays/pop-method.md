---
id: pop-method
title: Pop Method
sidebar_position: 4
---

## Pop Method

The `pop` method removes the last item from the array and returns its value.

```javascript
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const myArray = new MyArray();
myArray.push("apple");
myArray.push("banana");
console.log(myArray.pop()); // "banana"
console.log(myArray);
```

### output

```bash
 MyArray { length: 1, data: { '0': 'apple' } }
```
