---
id: max-profit
title: Maximum Stock Profit
sidebar_position: 6
---

### Challenge Description

Imagine you are buying and selling stocks throughout the year. Your job is to find the biggest profit you could make by buying low and selling high only once. You are given a list of stock prices for each day. Your goal is to find the difference between the cheapest price you could have bought the stock and the most expensive price you could have sold it later on.

For example:

- For the stock prices [7, 1, 5, 3, 6, 4], the maximum profit is 5 (buying at 1 and selling at 6).

### Tips to Solve

:::tip

1. Iterate through the list of stock prices.
2. Track the minimum price encountered so far.
3. Calculate the potential profit for each day by subtracting the minimum price from the current day's price.
4. Keep track of the maximum profit found.
   :::

### Step-by-Step Solution

Let's break down the solution into easy steps:

1. **Initialize Variables**:

   - Set `minPrice` to the first day's price (assuming it's the cheapest).
   - Set `maxProfit` to 0 (initially no profit).

   ```javascript
   let minPrice = prices[0]; // Assume the first day is the cheapest to buy
   let maxProfit = 0;
   ```

2. **Iterate Through Stock Prices**:

   - Use a loop to iterate through the stock prices starting from the second day.

   ```javascript
   for (let i = 1; i < prices.length; i++) {
     const currentPrice = prices[i];
     // console.log(currentPrice);
   }
   ```

3. **Update Minimum Price**:

   - For each day, check if the current price is lower than the minimum price encountered so far. If yes, update `minPrice`.

   ```javascript
   minPrice = Math.min(minPrice, currentPrice);
   // console.log(minPrice);
   ```

4. **Calculate Potential Profit**:

   - Calculate the potential profit by subtracting the `minPrice` from the current day's price.

   ```javascript
   const potentialProfit = currentPrice - minPrice;
   // console.log(potentialProfit);
   ```

5. **Update Maximum Profit**:

   - If the potential profit is higher than the current `maxProfit`, update `maxProfit`.

   ```javascript
   maxProfit = Math.max(maxProfit, potentialProfit);
   // console.log(maxProfit);
   ```

6. **Return Maximum Profit**:
   - After iterating through all the prices, return the `maxProfit`.
   ```javascript
   return maxProfit;
   ```

### Full Solution Code

Here is the complete solution using the steps above:

```javascript
const maxProfit = (prices) => {
  let minPrice = prices[0]; // Assume the first day is the cheapest to buy
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    // Update minimum price if a lower price is found
    minPrice = Math.min(minPrice, currentPrice);

    // Calculate potential profit for selling today
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit if a higher profit is found
    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum profit:", profit); // Output: 5
```
