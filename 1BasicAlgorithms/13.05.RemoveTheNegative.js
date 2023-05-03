// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

// Pseudocode:
// 1- Write a function that has arr as arguments
// 2- Create an empty arr to hold the result
// 3- Loop through the arr
// 4- Use if statement to find positive values
// 5- push each positive value to the new arr

// Code:
function NegativeRemoval(arr) {
    let result = [];
    for(let i=0; i<arr.length; i++) {
        arr[i]>0 ? result.push(arr[i]) : null
        }
        return result;
    }

let X = [1,-2,4,1]
console.log(NegativeRemoval(X))

// Diagram:
// 1: i=0 -> arr[0]=1>1 -> result[0]=arr[0]=1
// 2: i++ ... i=1 -> arr[0]=-1<0 -> no new assignment to result[]
// ...
// 5: i=4 -> 4 is not smaller 3, the loop stops