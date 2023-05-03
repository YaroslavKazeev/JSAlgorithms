// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

// Pseudocode:
// 1- for loop 200...2700 with increment 1
// 2- Add a number, which meets the if statement requirement to the cumulative sum of such numbers
// 3- stop the loop

// Code:

let sum=0
for (let i=200; i<=2700; i++) {
    (i%3==0|i%5==0)&!(i%3==0&i%5==0) ? sum+=i : null
}
console.log(sum)

// Diagram:
// 1: i=200 -> i doesn't meet requirement -> the loop goes further
// ...
// 2: i++ ... i=201 -> i doesn't meet requirement ->  201 adds to the sum, which has been 0 up until the moment
// ...
// 2701: i=2701 -> 2701 is not smaller or equal 2700, the loop stops