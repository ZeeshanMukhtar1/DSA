---
id: shift-method
title: Shift Method
sidebar_position: 5
---

## Shift Method

The `shift` method removes the first item from the array and returns its value. This method is useful for removing and accessing the first element in the array.

### How It Works

1. **Initialization**: Create an instance of the `MyArray` class.
2. **Adding Elements**: Use the `push` method to add elements.
3. **Removing the First Element**: Call the `shift` method to remove the first element from the array.

:::note
Using the `shift` method, the remaining elements are reindexed to maintain the array structure.
:::

### Implementation Logic

The `shift` method retrieves the first element and then shifts all subsequent elements one position to the left. It deletes the last element and decrements the array length.

### Code Example

```javascript
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Removes the first element from the array and returns it.
   * Shifts all other elements to the left.
   * @returns {*} - The removed element.
   */
  shift() {
    // highlight-start
    const firstElement = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    // highlight-end
    return firstElement;
  }
}

const myArray = new MyArray();
myArray.push("apple"); // Adding "apple" to the array
myArray.push("banana"); // Adding "banana" to the array
console.log(myArray.shift()); // Removing and displaying the first element
console.log(myArray); // Displaying the array's contents
```

### Output

```shell
"apple"
MyArray { length: 1, data: { '0': 'banana' } }
```
