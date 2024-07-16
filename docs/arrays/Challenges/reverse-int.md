---
id: reverse-int
title: Reverse Integer
sidebar_position: 3
---

### Challenge Description

Given an integer, reverse its digits and return the result. For example:

- 1234 becomes 4321
- -5678 becomes -8765

### Tips to Solve

:::tip

1. Convert the number to a string using the `toString` method.
2. Convert the string to an array using the `split` method.
3. Reverse the array using the `reverse` method.
4. Convert the array back to a string using the `join` method.
5. Convert the string back to a number using the `parseInt` method.
6. Maintain the sign of the original number.
   :::

### Step-by-Step Solution

Let's break down the solution into easy steps:

1. **Convert the Number to a String**:
   Use the `toString` method to convert the number into a string.

   ```javascript
   const str = (1234).toString(); // "1234"
   ```

2. **Convert the String to an Array**:
   Use the `split` method to convert the string into an array of characters.

   ```javascript
   const strArray = str.split(""); // ["1", "2", "3", "4"]
   ```

3. **Reverse the Array**:
   Use the `reverse` method to reverse the order of the elements in the array.

   ```javascript
   const reversedArray = strArray.reverse(); // ["4", "3", "2", "1"]
   ```

4. **Convert the Array Back to a String**:
   Use the `join` method to combine the elements of the array back into a string.

   ```javascript
   const reversedString = reversedArray.join(""); // "4321"
   ```

5. **Convert the String to a Number**:
   Use the `parseInt` method to convert the string back into a number.

   ```javascript
   const reversedNumber = parseInt(reversedString); // 4321
   ```

6. **Maintain the Sign**:
   Multiply the reversed number by the sign of the original number to maintain its sign.
   ```javascript
   const finalNumber = reversedNumber * Math.sign(1234); // 4321
   ```

### Full Solution Code

Here is the complete solution using the steps above:

```javascript
const reverseInt = (n) => {
  // highlight-start
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
  // highlight-end
};

console.log(reverseInt(1234)); // Output: 4321
console.log(reverseInt(-5678)); // Output: -8765
console.log(reverseInt(0)); // Output: 0
```
