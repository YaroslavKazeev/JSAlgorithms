// Declare a function isPalindrome(str) that takes a string as an input.
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// PseudoCode:
// 1- Declare a function isPalindrome(str) that takes a string as an input.
// 2- Get rid of punctuation marks and make the whole string lowercased
// 3- Split the string into the array of characters
// 4- Reverse the array and save it into a new one
// 5- Join the reversed array of characters into a new string
// 5- Return true if the reversed string is equal to the saved string in Step No. 2, otherwise return false


// Code:
let str
function isPalindrome(str) {
    // let str2=str.replace(/\w+|_/g, "").toLowerCase()
    let str2=str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").toLowerCase()
    console.log(str2)
    for(let i=0; i<str2.length/2; i++) {
        if(str2[i] !== str2[str2.length-1-i]){ 
            return false
        }
    }
    return true
    // return true;
    // const arrayValues = str2.split('');
    // const reverseArray = arrayValues.reverse();
    // const reverseString=reverseArray.join('');
    // return (str2 == reverseString) ? true : false        
    }
console.log(isPalindrome('Mad,.am'))