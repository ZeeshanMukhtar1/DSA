---
id: push-method
title: Push Method
sidebar_position: 2
---

## Push Method

The `push` method adds an item to the end of the array. This is similar to how the `push` method works in JavaScript's native arrays.

### How It Works

1. **Initialization**: Create an instance of the `MyArray` class.
2. **Adding Elements**: Use the `push` method to add new elements to the end of the array.
3. **Array Structure**: Each new element increases the length of the array.

:::info
Using the `push` method, we can dynamically grow our array by adding elements to its end.
:::

### Implementation Logic

The `push` method assigns the new item to the key corresponding to the current length of the array in the `data` object. After adding the item, the length of the array is incremented by 1.

### Code Example

```javascript
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Adds a new element to the end of the array.
   * @param {*} item - The element to add to the array.
   * @returns {number} - The new length of the array.
   */
  push(item) {
    // highlight-start
    this.data[this.length] = item;
    this.length++;
    // highlight-end
    return this.length;
  }
}

const myArray = new MyArray();
myArray.push("apple"); // Adding "apple" to the array
myArray.push("banana"); // Adding "banana" to the array
console.log(myArray); // Displaying the array's contents
```

### Output

```shell
MyArray { length: 2, data: { '0': 'apple', '1': 'banana' } }
```
