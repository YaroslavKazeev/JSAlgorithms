// Pseudocode

// input[i] > third
// third = input[i]
// return the third

// Array to text our code

function thirdHighest(array){
    let first = 0
    let second = 0
    let third = 0

    for(let i=0; i<array.length; i++){

        if(array[i] > first ){
            third = second;
            second = first;
            first=array[i]
        } else if (array[i]>second){
            third=second;
            second=array[i]
        }else if (array[i]>third){
            third=array[i]
        }
    }
    return third;
}

console.log(thirdHighest([5, 2, 8, 20, -2, 5, 11, 31, 7, 9]))