// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

// Pseudocode:
// 1- Write a function that has arr and word as arguments
// 2- Create an empty arr to hold the result
// 3- Create an empty string that will be the "*"
// 4-Loop through the arr
// 5- Use if statement to find the target word
// 6- If the target word is not in the arr, then print Err message
// 7- Else, loop through the founded word and write a "*" for each letter
// 8- After that push each work to the new arr

// Code:
function communist(arr, targetWord) {
    let result = [];
    let stars = "";
    for(let i=0; i<arr.length; i++) {
        if(targetWord === arr[i]){
            for(let j=0; j<targetWord.length; j++){
                stars += "*"
            }
            result.push(stars)
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

let X = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];

console.log(communist(X, 'Program'))

// Diagram
// 1- Console.log function access the aim function communist with an array of words and a targetword
// 3- the outer loop For which pushes the first word into another array
// ...
// 2- i=0 Inside the cummunist function starts the if statement to compare the target word with the first word arr[0] in the array
// 3- The inner loop For starts in case that a targetWord and arr[0] are the same.
// 4- The string variable "starts" consumes the number of asterisks equal to the number of letters of the targetWord
// ...
// 5- The stars variable is assigned to the result[0] element of another array
// 6- The arr[0] is assigned to the result[0] element in case there is no coincidence in words in step No.3 and the inner loop For is not executed.
// ...
// 7- After reaching the end of the arr[] array (the number of words) the outer loop For stops.
// 8- the function "Communist" returns the array result[], which is equal to the arr[] but with letters of a target word substituted with asterisks