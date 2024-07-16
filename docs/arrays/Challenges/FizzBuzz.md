---
id: fizzbuzz
title: FizzBuzz
sidebar_position: 5
---

### Challenge Description

FizzBuzz is a classic programming problem often used in coding interviews. The goal is to print numbers from 1 to n with the following rules:

- If a number is divisible by 3, print "Fizz".
- If a number is divisible by 5, print "Buzz".
- If a number is divisible by both 3 and 5, print "FizzBuzz".
- Otherwise, print the number itself.

For example:

- 1 => 1
- 2 => 2
- 3 => Fizz
- 5 => Buzz
- 15 => FizzBuzz

### Tips to Solve

:::tip

1. Print numbers from 1 to n using a loop.
2. Check if the number is divisible by 3 and 5 first, and print "FizzBuzz".
3. If the number is only divisible by 3, print "Fizz".
4. If the number is only divisible by 5, print "Buzz".
5. If none of the above conditions are met, print the number itself.
   :::

### Step-by-Step Solution

Let's break down the solution into easy steps:

1. **Print Numbers from 1 to n**:
   Use a loop to iterate through numbers from 1 to n.

   ```javascript
   for (let i = 1; i <= n; i++) {
     // logic will be implemented here
   }
   ```

2. **Check Divisibility by 3 and 5**:
   Use the modulus operator (`%`) to check if the number is divisible by both 3 and 5.

   ```javascript
   if (i % 3 === 0 && i % 5 === 0) {
     console.log("FizzBuzz");
   }
   ```

3. **Check Divisibility by 3**:
   If the number is not divisible by both 3 and 5, check if it's only divisible by 3.

   ```javascript
   else if (i % 3 === 0) {
     console.log("Fizz");
   }
   ```

4. **Check Divisibility by 5**:
   If the number is not divisible by 3, check if it's divisible by 5.

   ```javascript
   else if (i % 5 === 0) {
     console.log("Buzz");
   }
   ```

5. **Print the Number**:
   If none of the above conditions are met, print the number itself.
   ```javascript
   else {
     console.log(i);
   }
   ```

### Full Solution Code

Here is the complete solution using the steps above:

```javascript
const fizzBuzz = (n) => {
  // highlight-start
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  // highlight-end
};

fizzBuzz(15);
```

### output

```bash
Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

```
