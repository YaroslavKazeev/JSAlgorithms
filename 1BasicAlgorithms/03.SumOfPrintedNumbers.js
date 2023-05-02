// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

// Number is: 0 Sum: 0
// Number is: 1 Sum: 1
// Number is: 2 Sum: 3
// Number is: 3 Sum: 6
// ...

// You are NOT allowed to use an array to solve this exercise.

// Pseudocode:
// 1- Loop through numbers from 1 until 135, i++
// 2- Sum the previous sum with the current number i
// 3- print to console the number

// Code:

let Sum =0;

for (let i=0; i<=135; i++) {
    Sum = Sum + i;
    console.log(`Number is: ${i}, Sum: ${Sum}`);
}


// Diagram:
// 1: i=0 ->  i=0 -> 0, Sum:0
// 2: i++ ... i=1 -> 1, Sum:1
// 3: i++ ... i=2 -> 2, Sum:3
// ...
// 135: i++ i=135 -> 135, Sum:9180
// 136: i=136 -> 136 is not smaller of equal to 135 ... the loop stops