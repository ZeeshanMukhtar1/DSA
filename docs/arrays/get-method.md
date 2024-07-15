---
id: get-method
title: Get Method
sidebar_position: 3
---

## Get Method

The `get` method retrieves an item from the array by its index. This method helps us access specific elements stored in our custom array.

### How It Works

1. **Initialization**: We start by creating an instance of the `MyArray` class.
2. **Adding Elements**: We use the `push` method to add elements to our array.
3. **Retrieving an Element**: We call the `get` method with the index of the item we want to retrieve.

:::tip
The `get` method allows us to access elements by their index, similar to native JavaScript arrays.
:::

### Implementation Logic

The `get` method takes an index as an argument and returns the item at that index from the `data` object. Since the `data` object stores elements with their indices as keys, we can directly access the desired element using the index.

### Code Example

```javascript
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Retrieves the element at the given index.
   * @param {number} idx - The index of the element to retrieve.
   * @returns {*} - The element at the specified index.
   */
  get(idx) {
    // highlight-start
    return this.data[idx];
    // highlight-end
  }
}

const myArray = new MyArray();
myArray.push("apple"); // Adding an element to the array
console.log(myArray.get(0)); // Retrieving the element at index 0
```

### Output

```shell
"apple"
```
