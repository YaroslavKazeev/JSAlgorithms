// Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].

// Pseudocode:
// 1- Loop through the array from 1 until the length of an array, i++
// 2- Assign 'Turing' to the current value of the array if the current value of the array is negative
// 3- print the array

// Code:

const X = [1,-4,0,-1]
for (let i=0; i<X.length; i++) {
    X[i]<0 ? X[i]='Turing' : null;
}
console.log(X);

// Diagram:
// 1: i=0 ->  i=0 -> X[0]=1 X[0] -> stays the same
// 2: i++ ... i=1 -> X[1]=-4  -> X[0]='Turing'
// ...
// 4: i=4 -> 3 is not smaller the size of the array, which is 3 ... the loop stops