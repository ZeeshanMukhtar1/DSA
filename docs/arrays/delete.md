---
id: delete-method
title: Delete Method
sidebar_position: 6
---

## Delete Method

The `delete` method removes an item from the array at the specified index and returns its value. This method allows us to delete elements at any position in our custom array.

### How It Works

1. **Initialization**: Create an instance of the `MyArray` class.
2. **Adding Elements**: Use the `push` method to add elements.
3. **Deleting an Element**: Call the `delete` method with the index of the item to be removed.

:::info
The `delete` method ensures that all elements after the removed item are shifted left to maintain the array's structure.
:::

### Implementation Logic

The `delete` method follows these steps:

1. Stores the item to be removed.
2. Shifts all elements after the target index to the left.
3. Deletes the last element (now redundant).
4. Decrements the length of the array.
5. Returns the removed item.

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
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  /**
   * Removes the element at the specified index.
   * Shifts all subsequent elements to the left.
   * @param {number} index - The index of the element to remove.
   * @returns {*} - The removed element.
   */
  delete(index) {
    // highlight-start
    // Store the item to be removed
    const item = this.data[index];

    // Shift elements after the target element (excluding the last one)
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Delete the last element (which now holds the element to be removed)
    delete this.data[this.length - 1];

    // Decrement length
    this.length--;

    // Return the removed item
    return item;
    // highlight-end
  }
}

const myArray = new MyArray();
myArray.push("apple"); // Adding "apple" to the array
myArray.push("banana"); // Adding "banana" to the array
myArray.push("cherry"); // Adding "cherry" to the array
console.log(myArray.delete(1)); // Removing and displaying the element at index 1
console.log(myArray); // Displaying the array's contents
```

### Output

```shell
"banana"
MyArray { length: 2, data: { '0': 'apple', '1': 'cherry' } }

```
