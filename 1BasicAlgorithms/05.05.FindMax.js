// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

// Pseudocode:
// 1- Loop through the array from 1 until the length of an array, i++
// 2- Assign the variable the current value of the array if the variable is less than the current value of the array
// 3- print the variable's value after the loop stops

// Code:

const X = [2,-3,-1,0]
let max=0
for (let i=0; i<X.length; i++) {
    max < X[i] ? max = X[i]:null;
}
console.log(max);

// Diagram:
// 1: i=0 ->  i=0 -> X[0]=2 max=2
// 2: i++ ... i=1 -> X[1]=-3 max=2
// ...
// 4: i=4 -> 4 is not smaller the size of the array, which is 4 ... the loop stops