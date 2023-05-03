// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
// 0 1 1 2 3 5 8 13 21...

// Pseudocode:
// 1- Define the maximum value of the sequence to print all terms below it
// 1- Write the while loop to print a current term of the Fibonacci sequence and calculate the next term

// Code:
let CurrentNum = 0, FutureNum = 1, Sum, n=1000000

while (CurrentNum<n) {
    console.log(CurrentNum);
    Sum = CurrentNum + FutureNum;
    CurrentNum = FutureNum;
    FutureNum = Sum;
}

// Diagram:
// 1: CurrentNum=0<1000000 the loop goes on, FutureNum=1 -> Shift CurrentNum=1, FutureNum=0+1=1
// 2: CurrentNum=1<1000000 the loop goes on,, FutureNum=1 -> Shift CurrentNum=1, FutureNum=1+1=2
// ...
// ...: CurrentNum=1346269>1000000 the loop stops