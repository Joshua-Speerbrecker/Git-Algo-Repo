// Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.

function sum_even_numbers(){
    // create a variable called sum which will be a container for the sum of our numbers
    var sum = 0;
    // use a for loop to check for all even numbers between 0 and 1000
    for (var i = 0; i < 1001; i++){
        // check to see if it is an even number by dividing by 2 and checking if the remainder is 1 or 0 if it's 0 it's an even number
        if (i % 2 === 0){
            // if it's an even number we will add that number to the sum
            sum += i;
        }
    }
    return sum;
}

console.log (sum_even_numbers());