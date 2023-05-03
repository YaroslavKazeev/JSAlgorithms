// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

// Pseudocode:
// 1- Loop through the array from 1 until the length of an array, i++
// 2- Assign 0 to the current value of the array if the current value of the array is negative
// 3- print the array

// Code:

const X = [2,-1,4,-3]
for (let i=0; i<X.length; i++) {
    X[i]<0 ? X[i]=0 : null;
}
console.log(X);

// Diagram:
// 1: i=0 ->  i=0 -> X[0]=2 X[0] -> stays the same
// 2: i++ ... i=1 -> X[1]=-1  -> X[0]=0
// ...
// 4: i=4 -> 3 is not smaller the size of the array, which is 3 ... the loop stops