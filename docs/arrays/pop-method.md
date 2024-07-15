---
id: pop-method
title: Pop Method
sidebar_position: 4
---

## Pop Method

The `pop` method removes the last item from the array and returns its value. This method helps manage the array's contents by allowing us to remove the most recently added element.

### How It Works

1. **Initialization**: Create an instance of the `MyArray` class.
2. **Adding Elements**: Use the `push` method to add elements.
3. **Removing an Element**: Call the `pop` method to remove the last element from the array.

:::warning
Ensure the array is not empty before calling `pop`, as it may lead to unexpected results.
:::

### Implementation Logic

The `pop` method identifies the last item in the array using the current length minus one. It then deletes this item from the `data` object, decrements the array length, and returns the removed item.

### Code Example

```javascript
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Removes the last element from the array and returns it.
   * @returns {*} - The removed element.
   */
  pop() {
    // highlight-start
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    // highlight-end
    return lastItem;
  }
}

const myArray = new MyArray();
myArray.push("apple"); // Adding "apple" to the array
myArray.push("banana"); // Adding "banana" to the array
console.log(myArray.pop()); // Removing and displaying the last element
console.log(myArray); // Displaying the array's contents
```

### Output

```shell
"banana"
MyArray { length: 1, data: { '0': 'apple' } }

```
