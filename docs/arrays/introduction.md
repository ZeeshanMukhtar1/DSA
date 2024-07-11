---
id: introduction
title: Introduction to Arrays
sidebar_position: 1
---

## What is an Array in JavaScript?

An array is a data structure that can hold more than one value at a time. It is a collection of elements, each identified by a numeric index.

## Examples of Arrays

- **String Array:**

  ```javascript
  const stringArray = ["apple", "banana", "orange"];
  ```

- **Number Array:**

  ```javascript
  const numberArray = [1, 2, 3, 4, 5];
  ```

- **Boolean Array:**

  ```javascript
  const booleanArray = [true, false, true];
  ```

- **Mixed Array:**

  ```javascript
  const mixedArray = ["apple", 2, true, null, undefined];
  ```

- **Undefined and Null Array:**
  ```javascript
  const nullUndefinedArray = [undefined, null];
  ```

## Creating a Custom Array

Here is a basic template for creating a custom array in JavaScript.

```javascript
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
}

const myArray = new MyArray();
console.log(myArray); // MyArray { length: 0, data: {} }
```
