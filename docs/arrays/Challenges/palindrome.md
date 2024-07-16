---
id: palindrome
title: Palindrome
sidebar_position: 2
---

### Challenge Description

Check if a given string is a palindrome. A palindrome reads the same backward as forward. For example:

- "abba" is a palindrome.
- "cddc" is a palindrome.

### Tips to Solve

:::tip

1. Convert the string to an array using the `split` method.
2. Reverse the array using the `reverse` method.
3. Convert the array back to a string using the `join` method.
4. Compare the original string with the reversed string.
   :::

### Step-by-Step Solution

Let's break down the solution into easy steps:

1. **Convert the String to an Array**:
   Use the `split` method to convert the string into an array of characters.

   ```javascript
   const strArray = "abba".split(""); // ["a", "b", "b", "a"]
   ```

2. **Reverse the Array**:
   Use the `reverse` method to reverse the order of the elements in the array.

   ```javascript
   const reversedArray = strArray.reverse(); // ["a", "b", "b", "a"]
   ```

3. **Convert the Array Back to a String**:
   Use the `join` method to combine the elements of the array back into a string.

   ```javascript
   const reversedString = reversedArray.join(""); // "abba"
   ```

4. **Compare the Strings**:
   Compare the original string with the reversed string to check if they are the same.
   ```javascript
   const isPalindrome = "abba" === reversedString; // true
   ```

### Full Solution Code

Here is the complete solution using the steps above:

```javascript
// highlight-next-line
const palindrome = (str) => str.split("").reverse().join("") === str;
console.log(palindrome("abba")); // Output: true
console.log(palindrome("cddc")); // Output: true
console.log(palindrome("hello")); // Output: false
```
