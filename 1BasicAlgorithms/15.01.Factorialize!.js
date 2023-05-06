// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Example Outputs:
// factorialize(0) should return 1.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.

// PseudoCode:
// 1- Declare a function factorialize that takes an integer as an input parameter
// 2- Make the if-else operator chain to choose the proper case: 
// -if the number is less than 0 - write an error message on the console; 
// -if the number is equal to 0 - return 0, 
// -if the number is equal or more than 1 - return the number, multiplied by the next call of the function for the parameter lowered by 1. It should work like while loop with the exit from the loop when num==0

let num

function Factorialize(num){
    if (num<0){
        console.log('The number is smaller than 0')
    } else if (num==0){
        return 1
    } else {
        return (num * Factorialize(num-1))
    }
}

console.log(Factorialize(5))