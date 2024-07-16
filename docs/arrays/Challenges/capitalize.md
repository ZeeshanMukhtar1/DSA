---
id: capitalize
title: Sentence Capitalization
sidebar_position: 4
---

### Challenge Description

Given a string, capitalize the first letter of each word and make the rest of the letters lowercase. For example:

- "hello world" becomes "Hello World"
- "jordan peterson" becomes "Jordan Peterson"

### Tips to Solve

:::tip

1. Make the string lowercase using the `toLowerCase` method.
2. Convert the string to an array using the `split` method.
3. Capitalize the first letter of each word using the `map` method.
4. Convert the array back to a string using the `join` method.
   :::

### Step-by-Step Solution

Let's break down the solution into easy steps:

1. **Make the String Lowercase**:
   Use the `toLowerCase` method to convert the entire string to lowercase.

   ```javascript
   const lowerCaseStr = "HELLO WORLD".toLowerCase(); // "hello world"
   ```

2. **Convert the String to an Array**:
   Use the `split` method to convert the string into an array of words.

   ```javascript
   const wordsArray = lowerCaseStr.split(" "); // ["hello", "world"]
   ```

3. **Capitalize Each Word**:
   Use the `map` method to capitalize the first letter of each word.

   ```javascript
   const capitalizedWordsArray = wordsArray.map(
     (word) => word[0].toUpperCase() + word.slice(1)
   ); // ["Hello", "World"]
   ```

4. **Convert the Array Back to a String**:
   Use the `join` method to combine the words back into a single string.
   ```javascript
   const capitalizedStr = capitalizedWordsArray.join(" "); // "Hello World"
   ```

### Full Solution Code

Here is the complete solution using the steps above:

```javascript
const capitalize = (str) => {
  // highlight-start
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  // highlight-end
};

console.log(capitalize("hello world")); // Output: "Hello World"
console.log(capitalize("zeeshan mukhtar")); // Output: "Zeeshan Mukhtar"
```
