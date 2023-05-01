// Write a program using JavaScript that will print all the odd numbers from 1 to 135.

// Pseudocode:
// 1- Loop through numbers from 1 until 135 making the loop go two each time "i+=2"
// 2- print to console the number

// Code:
for (let i=1; i<=135; i+=2) {
    console.log(i);
}

// Diagram:
// 1: i=1 -> Result:1
// 2: i++ ... i=3 -> Result: 1,3
// ...
// 68: i+=2 i=135 -> Result: 1,2,5,...,135
// 69: i+=2 i=137: 137 > 135 -> 137 is not smaller of equal to 135 ... the loop stops