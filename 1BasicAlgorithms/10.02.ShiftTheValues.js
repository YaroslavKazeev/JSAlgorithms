// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// Pseudocode:
// 1- for loop within the number of elements in an array
// 2- assigning the current value of an array to an element with the reversed index of another array
// 3- stop the loop

// Code:

let X=[2,1,6,4,-7]
let Y=[]
for (let i=0; i<X.length; i++) {
    Y[X.length-i-1]=X[i]
}
console.log(Y)

// Diagram:
// 1: i=0 -> Y[4]=X[0] -> the loop goes further
// 2: i++ ... i=1 -> Y[3]=X[1] -> 
// ...
// 5: i=5 -> 5 is not smaller 4, the loop stops