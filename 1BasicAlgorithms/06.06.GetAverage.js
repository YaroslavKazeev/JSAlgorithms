// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

// Pseudocode:
// 1- Loop through the array from 1 until the length of an array, i++
// 2- Sum the previous sum with the current number i
// 3- After the loop stops, print the average which is equal to the Sum of the array's elements divided by the length of the array 

// Code:

const X = [2,1,3]
let Sum = 0;
for (let i=0; i<X.length; i++) {
    Sum = Sum + X[i];
}
console.log(Sum/X.length);

// Diagram:
// 1: i=0 ->  i=0 -> X[0]=2 Sum=2
// 2: i++ ... i=1 -> X[1]=1 Sum=3
// ...
// 4: i=4 -> 3 is not smaller the size of the array, which is 3 ... the loop stops