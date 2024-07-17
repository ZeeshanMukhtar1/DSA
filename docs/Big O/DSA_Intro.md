---
id: intro-to-dsa
title: DSA Introduction
sidebar_position: 1
---

## What is Data Structure and Algorithm?

A **data structure** is a specific way of organizing, storing, and accessing data.

An **algorithm** is a set of instructions that tell the computer how to do something. You can also say that a step-by-step solution to a problem is called an algorithm.

## Why Learn DSA?

Learning Data Structures and Algorithms (DSA) is crucial for efficient problem-solving and is highly valued by top tech companies like `Google`, `Amazon`, and `Facebook`.

:::tip

### Task: Student Finder

1. Create an array with 5 student names.
2. Create a function that takes two parameters: `allStudents` (array) and `studentName` (string). The function should iterate over all students and find the specific student name.
   :::

### Identifying Data and Algorithm

- **Data**: Array of student names.
- **Algorithm**: Function to iterate and find a specific student name.

### Solution

```javascript
// Step 1: Create an array with 5 student names
const students = ["Ali", "Zeeshan", "Kamran", "Muzammil", "Acme"];

// Step 2: Create a function to find a student by name
function findStudent(allStudents, studentName) {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      return `${studentName} is found!`;
    }
  }
  return `${studentName} is not found.`;
}

// Test the function
console.log(findStudent(students, "Zeeshan")); // Output: Zeeshan is found!
console.log(findStudent(students, "Zaman")); // Output: Zaman is not found.
```
