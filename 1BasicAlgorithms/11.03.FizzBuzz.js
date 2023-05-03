// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]

// Pseudocode:
// 1- for loop within the number of elements in an array
// 2- assigning the current value of an array to an element with the reversed index of another array
// 3- stop the loop

// Code:



let X=[]
let ArrSize=135

function FizzBuzz(ArrSize, X) {

    for (let i=1; i<ArrSize; i++) {
        X[i]=i
        i%3==0&&i%5==0 ? X[i]="FizzBuzz" : i%3==0 ? X[i]="Fizz" : i%5==0 ? X[i]="Buzz" : null
}
    return X
}
console.log(FizzBuzz(ArrSize,X))

// Diagram:
// 1: i=1 -> X[1]=i
// 2: i++ ... divisible both 3&5 -> reassign the value X[1]="FizzBuzz", %3 -> "Fizz", %5 -> "Buzz", 
// ...
// 136: i=136 -> 136 is not smaller 135, the loop stops