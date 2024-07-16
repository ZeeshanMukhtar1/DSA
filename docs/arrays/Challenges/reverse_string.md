---
id: reverse-string
title: Reverse String
sidebar_position: 1
---

### Challenge Description

Given a string, reverse the string and return the result. For example:

- "hello" becomes "olleh"
- "apple" becomes "elppa"

### Tips to Solve

:::tip

1. Convert the string to an array using the `split` method.
2. Reverse the array using the `reverse` method.
3. Convert the array back to a string using the `join` method.
   :::

### Step-by-Step Solution

Let's break down the solution into easy steps:

1. **Convert the String to an Array**:
   Use the `split` method to convert the string into an array of characters.

   ```javascript
   const strArray = "hello".split(""); // ["h", "e", "l", "l", "o"]
   ```

2. **Reverse the Array**:
   Use the `reverse` method to reverse the order of the elements in the array.

   ```javascript
   const reversedArray = strArray.reverse(); // ["o", "l", "l", "e", "h"]
   ```

3. **Convert the Array Back to a String**:
   Use the `join` method to combine the elements of the array back into a string.
   ```javascript
   const reversedString = reversedArray.join(""); // "olleh"
   ```

### Full Solution Code

Here is the complete solution using the steps above:

```javascript
// highlight-next-line
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("apple")); // Output: "elppa"
```
