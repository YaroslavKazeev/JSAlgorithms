// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

// Pseudocode:
// 1- Loop through numbers from 1 until the length of an array, i++
// 3- print to console the number

// Code:

X = [1,4,2,12]
for (let i=0; i<X.length; i++) {
    console.log(X[i]);
}


// Diagram:
// 1: i=0 ->  i=0 -> X[0]=1
// 2: i++ ... i=1 -> X[1]=4
// ...
// 4: i++ i=135 -> 135, X[3]=12
// 5: i=4 -> 4 is not smaller the size of the array, which is 4 ... the loop stops